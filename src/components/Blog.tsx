import Image from 'next/image';

interface Blog {
  _id: string;
  userId: string;
  title: string;
  description: string;
  image?: string;
}

interface BlogProps {
  blog: Blog;
}

const Blog = ({ blog }: BlogProps) => {
  return (
    <div className=' w-full h-full'>
      <div
        key={blog._id}
        className='w-full h-full bg-white p-6 rounded-lg shadow-md'
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
    </div>
  );
};

export default Blog;
