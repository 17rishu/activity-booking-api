import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import auth from './routes/auth.routes.js';
import activities from './routes/activities.routes.js';
import bookings from './routes/bookings.routes.js';

// Load env vars
dotenv.config();

// Verify environment variables
console.log('Environment variables loaded:');
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
console.log('MONGODB_URI starts with:', process.env.MONGODB_URI?.substring(0, 20) + '...');

// Connect to database
connectDB().catch(err => {
    console.error('Failed to connect to MongoDB Atlas:', err);
    process.exit(1);
});

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://your-frontend-domain.com'] 
        : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error details:', err);
    res.status(500).json({
        success: false,
        message: 'Server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Mount routers
app.use('/api/auth', auth);
app.use('/api/activities', activities);
app.use('/api/bookings', bookings);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    console.log('Stack trace:', err.stack);
    // Close server & exit process
    server.close(() => process.exit(1));
}); 