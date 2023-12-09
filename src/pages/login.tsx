import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      setNotification('Login successful!');
      localStorage.setItem('userId', response.data.userId);
      document.cookie = 'userId=' + response.data.userId;
      router.push('/blog/new');
    } catch (error: any) {
      setNotification('Invalid email or password. Please try again.');
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-96 relative'>
        <h2 className='text-2xl font-semibold mb-4'>Login</h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Email:
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 p-2 border w-full rounded'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Password:
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 p-2 border w-full rounded'
            />
          </div>
          <button
            type='button'
            onClick={handleLogin}
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
          >
            Login
          </button>
        </form>
      </div>

      {notification && (
        <div className='bg-green-500 text-white p-4 rounded absolute bottom-4 left-4 right-4'>
          {notification}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
