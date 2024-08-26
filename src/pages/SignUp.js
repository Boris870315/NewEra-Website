import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Sign Up successful!');
                navigate('/login'); // 注册成功后重定向到登录页面
            } else {
                setError(data.message || 'Sign Up failed');
            }
        } catch (error) {
            console.error('Sign Up request error:', error);
            setError('An error occurred during sign up');
        }
    }

    return (
        <div className="login-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp} className="login-form">
                <div>
                    <label>
                        User Name:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
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
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;