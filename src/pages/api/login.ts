import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '@/utils/db';
import User from '@/backend/models/User';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
      await connectToDatabase();

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      return res.status(200).json({ message: 'Login successful' });
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
