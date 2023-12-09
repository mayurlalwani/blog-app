import axios from 'axios';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const CreateBlogPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const Editor = dynamic(() => import('./CKEditor'), { ssr: false });

  const handleCreateBlog = async () => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.post('/api/create-blog', {
        userId,
        title,
        description,
        image: imagePath,
      });
      setDescription('');
      setTitle('');
      setNotification('Blog created successfully!');
    } catch (error) {
      setNotification('Some error occured!');
    }
  };

  const handleContentChange = (newContent: string) => {
    setDescription(newContent);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 h-screen'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full w-full'
        encType='multipart/form-data'
        action='/api/upload-image'
        method='post'
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Title
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Description
          </label>
          <Editor
            description={description}
            onChange={handleContentChange}
            setImagePath={setImagePath}
          />
        </div>
        <div className='flex'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32'
            type='button'
            onClick={handleCreateBlog}
          >
            Create Blog
          </button>
        </div>
      </form>
      {notification && (
        <div className='bg-green-500 text-white p-4 rounded absolute bottom-4 left-4 right-4'>
          {notification}
        </div>
      )}
    </div>
  );
};

export default CreateBlogPage;
