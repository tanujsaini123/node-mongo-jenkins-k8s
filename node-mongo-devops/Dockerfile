#use smaller image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy only package files for dependency install (better Docker layer caching)
COPY app/package*.json ./

# Install production dependencies and clean cache
RUN npm install --production && npm cache clean --force

# Copy the rest of the application
COPY app/ .

# Expose port (optional but good practice if using in K8s or Docker run)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
