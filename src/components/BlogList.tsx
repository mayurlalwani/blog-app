import Image from 'next/image';

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
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {blogs.map((blog) => (
        <div key={blog._id} className='bg-white p-6 rounded-lg shadow-md'>
          {blog.image && (
            <Image
              src={blog.image}
              alt={`Image for ${blog.title}`}
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
