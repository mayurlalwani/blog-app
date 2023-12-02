import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/signup', {
        email,
        password,
      });
      if (response.data) setNotification('Sign-up successful!');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      setNotification('Error signing up. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
        {notification && (
          <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4'>
            {notification}
          </div>
        )}
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
          <div>
            <label className='block text-sm font-medium text-gray-600'>
              Confirm Password:
            </label>
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='mt-1 p-2 border w-full rounded'
            />
          </div>
          <button
            type='button'
            onClick={handleSignUp}
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
