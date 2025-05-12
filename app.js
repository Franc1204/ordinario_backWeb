const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const corsOptions = require("./middlewares/cors");
const path = require("path");
const config = require("./config/config");

const app = express();

// Conectar a la base de datos
connectDB(); 

// CORS configuration
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Servir archivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Rutas
app.use("/api/modelos", require("./routes/modeloRoutes"));
app.use("/api/usuarios", require("./routes/usuarioRoutes"));
app.use("/api/pedidos", require("./routes/pedidoRoutes"));
app.use("/api/inventario", require("./routes/inventarioRoutes"));

// Middleware para manejo de errores
app.use(errorHandler);

// Iniciar servidor
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT} (${config.nodeEnv})`);
});