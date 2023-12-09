import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <div className='text-center'>
        <div className='flex items-center justify-center'>
          <Link
            href='/login'
            className='bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none mr-20 hover:bg-blue-600 mt-20 w-20 inline-block text-center'
          >
            Login
          </Link>
          <Link
            className='bg-pink-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-pink-600 mt-20 w-40 inline-block text-center'
            href='/signup'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </Layout>
  );
}
