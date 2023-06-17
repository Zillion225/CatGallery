# Use an official Node.js image as the base
FROM node:14-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json file to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the React app
RUN npm run build


# Use a lightweight Node.js image for production
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build-stage /app/build /app/build

# Install serve to run the production build
RUN npm install -g serve

# Expose port 80
EXPOSE 80

# Serve the production build
CMD [ "serve", "-s", "build", "-l", "80" ]