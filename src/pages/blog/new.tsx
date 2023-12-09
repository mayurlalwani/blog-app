import CreateBlog from '@/components/CreateBlog';
import Layout from '@/components/Layout';
import React from 'react';

const BlogCreatePage: React.FC = () => {
  return (
    <div>
      <Layout>
        <CreateBlog />
      </Layout>
    </div>
  );
};

export default BlogCreatePage;
