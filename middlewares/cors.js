// middlewares/cors.js
const config = require('../config/config');

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir peticiones sin origen (como mobile apps o curl)
    if (!origin) return callback(null, true);
    
    if (config.allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  credentials: true,
  exposedHeaders: ["Content-Length", "X-Requested-With"],
  maxAge: 86400 
};

module.exports = corsOptions;