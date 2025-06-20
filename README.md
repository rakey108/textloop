# Textloop Monorepo

A modern monorepo for a scalable web application, featuring:
- **Next.js** (apps/web) for the frontend
- **Express + TypeScript** (apps/api) for the backend API
- **PostgreSQL** (Docker) for the database
- **pnpm workspaces** for dependency management
- **Drizzle** for database migrations (optional, not used as ORM)
- **Shared types and schemas** (packages/shared) for type safety across client and server

---

## Project Structure

```
textloop/
├── apps/
│   ├── api/        # Express API server
│   └── web/        # Next.js frontend app
├── packages/
│   └── shared/     # Shared Zod schemas and types
├── .vscode/        # VSCode workspace settings and tasks
├── docker-compose.yml
├── README.md
├── package.json    # Root workspace config
├── pnpm-workspace.yaml
└── ...
```

---

## Getting Started

### Prerequisites
- [Node.js 20+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (`corepack enable && corepack prepare pnpm@latest --activate`)
- [Docker](https://www.docker.com/)

### Install dependencies
```sh
pnpm install
```

### Development
- **Start API:**
  ```sh
  pnpm --filter @textloop/api dev
  ```
- **Start Web:**
  ```sh
  pnpm --filter @textloop/web dev
  ```
- **Or use VSCode tasks:**
  - `Start` task runs both API and Web

### Linting & Formatting
- Lint all packages:
  ```sh
  pnpm lint
  ```
- Formatting is handled by Prettier (auto-format on save in VSCode)

---

## Database & Migrations
- **Postgres** runs in Docker (see `docker-compose.yml`)
- **Drizzle** is used for migrations only (not as ORM)
- To run migrations:
  ```sh
  pnpm --filter @textloop/api db:migrate
  ```

---

## Docker Deployment
- Build and run all services:
  ```sh
  docker-compose up --build
  ```
- Web: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:3001](http://localhost:3001)
- Postgres: [localhost:5432](localhost:5432)

---

## Shared Types & Schemas
- Place shared Zod schemas and types in `packages/shared`
- Import them in both API and Web for type safety

---

## VSCode Integration
- Recommended extensions: ESLint, Prettier
- Tasks and launch configs are set up for easy development and debugging

---

## Contributing
1. Fork and clone the repo
2. Create a new branch
3. Make your changes
4. Open a pull request

---

## License
MIT 