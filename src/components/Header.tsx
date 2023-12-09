import Link from 'next/link';

const Header = () => {
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
    </header>
  );
};

export default Header;
