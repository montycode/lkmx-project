# Install dependencies
FROM node:20-alpine
WORKDIR /app
COPY . .
# Install dependencies and build the app
RUN npm install && npm run build

# Start the app
EXPOSE 3000
CMD ["npm", "run", "start"]
