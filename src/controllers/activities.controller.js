import Activity from '../models/activity.models.js';
import { validationResult } from 'express-validator';

// @desc    Get all activities
// @route   GET /api/activities
// @access  Public
export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json({
            success: true,
            count: activities.length,
            data: activities
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

// @desc    Get single activity
// @route   GET /api/activities/:id
// @access  Public
export const getActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({
                success: false,
                message: 'Activity not found'
            });
        }
        res.status(200).json({
            success: true,
            data: activity
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

// @desc    Create new activity
// @route   POST /api/activities
// @access  Private
export const createActivity = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const activity = await Activity.create(req.body);
        res.status(201).json({
            success: true,
            data: activity
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
}; 