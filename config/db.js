const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    const options = {
      // Opciones de MongoDB para evitar advertencias de deprecación
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(config.mongoUri, options); 
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;