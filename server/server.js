const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5001;
const JWT_SECRET = 'your_jwt_secret_key'; // 請使用更安全的密鑰

// 設置MySQL連接
const db = mysql.createConnection({
    host: 'localhost',
    database: 'New_Era_Website',
    user: 'root',
    password: '97445028'
});

db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
        process.exit(1);
    }
    console.log('MySQL connected...');
});

app.use(cors()); // 使用Cors中間件
app.use(bodyParser.json());

// 登錄端點
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');

    const query = 'SELECT id, username, email FROM users WHERE email = ? AND password_hash = ?';
    db.query(query, [email, passwordHash], (err, results) => {
        if (err) {
            console.error('Database query error:', err); // 添加詳細日誌記錄
            return res.status(500).json({ message: 'Internal server error', error: err });
        }

        if (results.length > 0) {
            const user = results[0];
            const token = jwt.sign(
                { id: user.id, username: user.username, email: user.email },
                JWT_SECRET,
                { expiresIn: '1h' }
            );
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});

// 認證中間件
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access token missing' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
};

// 更新獲取用戶信息端點
app.get('/api/user', authenticateToken, (req, res) => {
    const userId = req.user.id;

    const query = 'SELECT id, username, email FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Database query error:', err); // 添加詳細日誌記錄
            return res.status(500).json({ message: 'Internal server error', error: err });
        }

        if (results.length > 0) {
            const user = results[0];
            res.json({ id: user.id, username: user.username, email: user.email });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});