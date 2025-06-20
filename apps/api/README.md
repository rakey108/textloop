# TextLoop API

A modern Node.js API built with TypeScript, Express, PostgreSQL, and Drizzle ORM.

## Features

- TypeScript for type safety
- Express.js for routing
- PostgreSQL database with Drizzle ORM
- HTTP/2 support
- JWT authentication with jose
- Request validation with Zod
- Docker containerization
- CORS enabled

## Prerequisites

- Node.js 20 or higher
- pnpm
- Docker and Docker Compose
- PostgreSQL (if running locally)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=textloop
   JWT_SECRET=your-secret-key-change-in-production
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Docker Setup

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. The API will be available at `http://localhost:3000`

## Database Migrations

1. Generate migrations:
   ```bash
   pnpm db:generate
   ```

2. Push migrations to database:
   ```bash
   pnpm db:push
   ```

3. View database with Drizzle Studio:
   ```bash
   pnpm db:studio
   ```

## API Endpoints

### Users

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
