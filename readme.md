# Respond.io Assessment - Notes API

This project is a backend API for managing notes. It supports user authentication, CRUD operations for notes, and full-text search functionality. The application is built using Node.js, Express, Sequelize, and MySQL.

## Features
- User authentication (signup and login)
- CRUD operations for notes
- Full-text search on notes
- Caching with Redis
- Dockerized setup for easy deployment

## Prerequisites
- Node.js (v20.17.0 or higher)
- MySQL (v5.7 or higher)
- Redis
- Docker (optional, for containerized setup)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ubirehman/Respond.io
   cd Respond.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env.sample` to `.env` and update the values as needed.

4. Run database migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Running the Application

### Locally
1. Start the application:
   ```bash
   npm run dev
   ```

2. The server will be running at `http://localhost:4001`.

### Using Docker
1. Build the Docker image:
   ```bash
   docker build -t respond.io-assessment .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 4001:4001 --env-file .env respond.io-assessment
   ```

3. Alternatively, use Docker Compose:
   ```bash
   docker-compose up
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User signup
- `POST /api/auth/login` - User login

### Notes
- `GET /api/notes` - Get all notes for the authenticated user
- `GET /api/notes/:noteId` - Get a specific note by ID
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:noteId` - Update a note
- `DELETE /api/notes/:noteId` - Delete a note
- `GET /api/notes/search?keyword=<keyword>` - Search notes by keyword

## Testing
Currently, no tests are implemented.

## License
This project is licensed under the ISC License.