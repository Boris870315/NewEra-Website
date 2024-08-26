// src/pages/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; 
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('Login successful!');
                navigate('/personal'); // 使用 useNavigate 進行導航
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred during login');
        }
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div>
                    <button type="submit">Login</button>
                </div>
                <div>
                    <NavLink to="/signUp">
                        <button type="button" className="signup-button">SignUp</button>
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;