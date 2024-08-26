import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        // 如果沒有令牌，重定向到登錄頁面
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5001/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUsername(data.username); // 更新正確的字段名
        } else if (response.status === 401 || response.status === 403) {
          // 令牌無效或過期，重定向到登錄頁面
          localStorage.removeItem('token');
          navigate('/login');
        } else {
          setError('Failed to fetch user data');
        }
      } catch (err) {
        console.error('An unexpected error occurred:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    // 清除本地存儲中的令牌或其他認證信息
    localStorage.removeItem('token');
    // 重定向到登錄頁面
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='personal-page'>
      <h1>Hi, {username}!</h1> {/* 使用正確的字段名 */}
      <p>Welcome to your personal page.</p>
      {/* 其他個人頁面內容 */}
      <button onClick={handleLogout} className="logout-button">Log Out</button>
    </div>
  );
};

export default Personal;