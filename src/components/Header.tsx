import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

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
        <span onClick={handleLogout} className='ml-10 mr-10'>
          Logout
        </span>
      </div>
    </header>
  );
};

export default Header;
