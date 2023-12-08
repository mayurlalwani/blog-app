import path from 'path';
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';

const uploadDirectory = './public/uploads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    upload.single('file')(req, res, async (err: any) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const file = req.file as Express.Multer.File;
      const imagePath = `/uploads/${file.filename}`;

      return res.status(200).json({ path: imagePath });
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
