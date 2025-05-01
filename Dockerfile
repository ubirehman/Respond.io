# Use an official Node.js runtime as the base image
FROM node:20.17.0

# Update and install necessary dependencies
RUN apt-get update && apt-get install -y bash && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /var/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your application runs
EXPOSE 4001

# Start the application using node instead of nodemon
CMD ["node", "server.js"]