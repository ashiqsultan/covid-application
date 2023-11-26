# Use Node.js 20.9.0 as base image
FROM node:20.9.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
# COPY package.json yarn.lock ./

# Copy source code to the working directory
COPY . .

# Install dependencies
RUN yarn

# Build the TypeScript code
RUN yarn run build

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["node", "dist/server.js"]
