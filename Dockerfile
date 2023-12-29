# React build creation
FROM node:latest as node

ARG REACT_APP_BASE_URL

WORKDIR /app

COPY ./public ./public
COPY ./src ./src
COPY package.json .

RUN npm install
RUN npm run build

CMD ["npm", "start"]