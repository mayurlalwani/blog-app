import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'your-mongodb-uri';

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cachedDb: mongoose.Connection | null = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const db = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions);

  cachedDb = db.connections[0];

  return db;
}
