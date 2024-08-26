const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5001;
const JWT_SECRET = 'your_jwt_secret_key'; // 请使用更安全的密钥

// 设置MySQL连接
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

app.use(cors()); // 使用 Cors 中间件
app.use(bodyParser.json());

// 注册端点
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required' });
    }

    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
    const query = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';

    db.query(query, [username, email, passwordHash], (err, result) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ message: 'Internal server error', error: err });
        }

        res.status(201).json({ message: 'User registered successfully' });
    });
});

// 登录端点
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');

    const query = 'SELECT id, username, email FROM users WHERE email = ? AND password_hash = ?';
    db.query(query, [email, passwordHash], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
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

// 认证中间件
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

// 获取用户信息端点
app.get('/api/user', authenticateToken, (req, res) => {
    const userId = req.user.id;

    const query = 'SELECT id, username, email FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
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