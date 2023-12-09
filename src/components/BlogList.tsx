import Image from 'next/image';
import { useRouter } from 'next/router';

interface Blog {
  _id: string;
  userId: string;
  title: string;
  description: string;
  image?: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  const router = useRouter();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {blogs.length === 0 && (
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-bold mb-2'>No blogs found</h2>
          <p>Try creating a blog</p>
        </div>
      )}
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className='bg-white p-6 rounded-lg shadow-md cursor-pointer'
          onClick={() => router.push(`/blog/${blog._id}`)}
        >
          {blog.image && (
            <Image
              src={blog.image}
              alt={`Image for ${blog.title}`}
              width={500}
              height={500}
              className='mb-4 rounded-lg w-full h-40 object-cover'
            />
          )}
          <h2 className='text-xl font-bold mb-2'>{blog.title}</h2>
          <div
            className='prose'
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
