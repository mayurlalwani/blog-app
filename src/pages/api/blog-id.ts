import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';
import Blog from '@/backend/models/Blog';

connectToDatabase();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const blog = await Blog.findOne({
      userId: req.query.userId,
      _id: req.query.id,
    });

    return res.status(201).json({ blog });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
