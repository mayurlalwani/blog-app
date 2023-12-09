import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      router.push('/');
    } else {
      setUserId(userId);
    }
  }, []);
  const handleLogout = async () => {
    localStorage.removeItem('userId');
    document.cookie = '';
    router.push('/');
  };
  return (
    <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <span className='text-xl font-bold'>Blog app</span>
        <div className='display-flex items-center justify-center'>
          <Link className='ml-10 mr-10' href='/blog/new'>
            Create blog
          </Link>
          <Link href='/blog/list'>All blogs</Link>
        </div>
      </div>
      <div>
        {userId !== '' && (
          <span onClick={handleLogout} className='ml-10 mr-10 cursor-pointer'>
            Logout
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
