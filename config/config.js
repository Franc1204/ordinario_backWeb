require('dotenv').config();

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET || 'secret',
  allowedOrigins: [
    'http://localhost',
    'http://localhost:80',
    'http://localhost:5500',
    'http://127.0.0.1',
    'http://127.0.0.1:80',

  ]
};

module.exports = config; 