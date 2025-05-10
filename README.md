# Activity Booking App API

A RESTful API for booking various activities like cricket, movies, football matches, etc.

## Features

- User registration and authentication with JWT
- List available activities
- Book activities
- View user's bookings
- Input validation
- Password hashing
- Protected routes

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Express Validator
- Bcrypt

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd activity-booking-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/activity-booking
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=24h
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Activities
- GET `/api/activities` - Get all activities
- GET `/api/activities/:id` - Get single activity
- POST `/api/activities` - Create new activity (Protected)

### Bookings
- POST `/api/bookings` - Create new booking (Protected)
- GET `/api/bookings/my-bookings` - Get user's bookings (Protected)

## API Testing

You can test the API endpoints using Postman or any other API testing tool. Make sure to:

1. Register a new user
2. Login to get the JWT token
3. Use the token in the Authorization header for protected routes:
```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The API includes proper error handling for:
- Invalid input data
- Authentication errors
- Resource not found
- Server errors

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- Protected routes
- Input validation
- CORS enabled 
