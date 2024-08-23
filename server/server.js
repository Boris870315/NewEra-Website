const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const crypto = require('crypto');

const app = express();
const PORT = 5000;

// 设置MySQL连接
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',    // 替换为你的MySQL用户名
    password: 'your_password', // 替换为你的MySQL密码
    database: 'New_Era_Website'  // 替换为你的数据库名
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.use(bodyParser.json());

// 登录端点
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // 使用SHA-256哈希密码
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');

    const query = 'SELECT * FROM users WHERE email = ? AND password_hash = ?';
    db.query(query, [email, passwordHash], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.json({ token: 'fake-jwt-token' }); // 成功时返回token
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});