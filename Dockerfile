# Dockerfile

# Especifica la imagen base
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto necesario para la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]