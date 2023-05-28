import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = async () => {
  const mongouri = process.env.DB_URI || 'mongodb://localhost:27017';

  try {
    console.log('Connecting to the database...');
    console.log(`Using URI: ${mongouri}`)

    await mongoose.connect(
      mongouri,
      {
        dbName: process.env.DB_NAME,
      }
    );

    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1);
  }
};

export default connectDatabase;
