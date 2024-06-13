# Base
FROM node:20-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

# Dev
FROM base AS development

RUN npm install

COPY . .

CMD ["sh", "-c", "npx prisma generate && npm run dev"]

# Build
FROM base AS builder

RUN npm install --omit=dev

COPY . .

RUN npx prisma generate

RUN npm run build

# Production
FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/.env ./

CMD ["sh", "-c", "npx prisma migrate deploy && npm run prod"]
