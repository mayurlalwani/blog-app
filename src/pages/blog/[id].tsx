import Blog from '@/components/Blog';
import Layout from '@/components/Layout';
import axios from 'axios';
export default function BlogPage({ blog }: { blog: any }) {
  return (
    <div>
      <Layout>
        <Blog blog={blog} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const data = context.req.headers.cookie
    ? context.req.headers.cookie
        .split('; ')
        .find((row: any) => row.startsWith('userId='))
    : null;
  try {
    const userId = data ? data.split('=')[1] : null;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-id?userId=${userId}&id=${context.params.id}`
    );

    return {
      props: {
        blog: response.data.blog,
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
