import mongoose, { Schema, Document } from 'mongoose';

export interface IPerson extends Document {
  name: string;
  age: number;
}

const personSchema = new Schema<IPerson>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

export default mongoose.model<IPerson>('Person', personSchema);
