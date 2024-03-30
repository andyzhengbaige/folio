FROM node:20.11.1-bullseye-slim AS base

# Install dependencies only when needed
FROM base AS deps

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

ENV NODE_ENV development
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn install

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "dev"]