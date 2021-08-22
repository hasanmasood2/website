FROM node:16 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY src ./src
COPY public ./public
RUN npm run build

FROM nginx:stable
COPY nginx.conf /etc/nginx/
COPY --from=builder /usr/src/app/build  usr/share/nginx/html
