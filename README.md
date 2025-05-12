# Backend Porsche

API para la aplicación web de Porsche.

## Dependencias

- Node.js
- Express
- MongoDB

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
# Entorno (development o production)
NODE_ENV=development

# Puerto de la aplicación
PORT=3000

# Conexión a MongoDB
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/porsche?retryWrites=true&w=majority

# Secreto para JWT
JWT_SECRET=tu_jwt_secret_secreto_para_generar_tokens
```

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor en desarrollo
npm start
```

## Despliegue en Render

1. Crea una cuenta en Render.com
2. Crea un nuevo Web Service y conecta tu repositorio
3. Configura el servicio:
   - Build Command: `npm install`
   - Start Command: `node app.js`
4. Configura las variables de entorno:
   - `NODE_ENV`: production
   - `MONGO_URI`: URL de conexión a MongoDB Atlas
   - `JWT_SECRET`: Una cadena secreta para JWT
5. Despliega el servicio

## Frontend

Después de desplegar el backend en Render, deberás modificar todas las URL de API en el frontend para que apunten a la URL del backend que te proporciona Render. Por ejemplo:

```javascript
// Cambiar esto
fetch('http://localhost:3000/api/usuarios/login', { ... })

// Por esto
fetch('https://tu-backend.onrender.com/api/usuarios/login', { ... })
```

Para facilitar este cambio, puedes crear una variable de configuración en el frontend que almacene la URL base:

```javascript
// En un archivo config.js
const API_URL = 'https://tu-backend.onrender.com';
// Y luego usar
fetch(`${API_URL}/api/usuarios/login`, { ... })
``` 