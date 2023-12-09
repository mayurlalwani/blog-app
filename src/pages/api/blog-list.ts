import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import Blog from '@/backend/models/Blog';

connectToDatabase();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const blogs = await Blog.find({ userId: req.query.userId });

    return res.status(201).json({ blogs });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
