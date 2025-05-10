import express from 'express';
import { check } from 'express-validator';
import { createBooking, getMyBookings } from '../controllers/bookings.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(protect);

router.post(
    '/',
    [
        check('activityId', 'Activity ID is required').not().isEmpty()
    ],
    createBooking
);

router.get('/my-bookings', getMyBookings);

export default router; 