import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        // Log the connection string (without password) for debugging
        const uri = process.env.MONGODB_URI;
        console.log('Attempting to connect to MongoDB...');
        console.log('Connection string format:', uri.split('@')[0] + '@' + uri.split('@')[1]);

        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.error('Full error:', error);
        process.exit(1);
    }
};

export default connectDB; 