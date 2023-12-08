import mongoose, { Document, Schema } from 'mongoose';

export interface BlogDocument extends Document {
  title: string;
  description: string;
  image: String;
}

const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
});

const Blog =
  mongoose.models.Blog || mongoose.model<BlogDocument>('Blog', blogSchema);

export default Blog;
