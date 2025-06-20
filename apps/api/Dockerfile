# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY ../../pnpm-workspace.yaml ../../package.json ./
COPY ../../packages ./packages
COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./src ./src
COPY ./drizzle ./drizzle
COPY ./logs ./logs
RUN pnpm install --frozen-lockfile && pnpm build

# Stage 2: Run
FROM node:20-alpine
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/drizzle ./drizzle
COPY --from=builder /app/logs ./logs
EXPOSE 3000
CMD ["node", "dist/server.js"] 