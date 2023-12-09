import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import Blog from '@/backend/models/Blog';

connectToDatabase();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { title, description, image, userId } = req.body;

  try {
    const blog = new Blog({
      userId,
      title,
      description,
      image,
    });

    await blog.save();

    return res.status(201).json({ message: 'Blog created successfully' });
  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
