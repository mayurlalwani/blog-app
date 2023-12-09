import BlogList from '@/components/BlogList';
import Layout from '@/components/Layout';
import axios from 'axios';
import React from 'react';

const BlogCreatePage: React.FC = ({ blogs }: any) => {
  return (
    <div>
      <Layout>
        <BlogList blogs={blogs} />
      </Layout>
    </div>
  );
};

export default BlogCreatePage;

export async function getServerSideProps(context: any) {
  const data = context.req.headers.cookie
    ? context.req.headers.cookie
        .split('; ')
        .find((row) => row.startsWith('userId='))
    : null;
  try {
    const userId = data ? data.split('=')[1] : null;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-list?userId=${userId}`
    );

    return {
      props: {
        blogs: response.data.blogs,
      },
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
      },
    };
  }
}
