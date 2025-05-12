// This file is only to fix deployment on Render 
// which might be looking for index.js as the entry point

// Simply require the main app.js file
require('./app.js'); 