import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Layout>
        <div className='text-center'>
          <div>
            <h1>Blog app</h1>
            <Link
              href='/login'
              className='bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600 mb-4 w-full inline-block text-center'
            >
              Login
            </Link>
            <Link
              className='bg-pink-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-pink-600 w-full inline-block text-center'
              href='/signup'
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Layout>
    </main>
  );
}
