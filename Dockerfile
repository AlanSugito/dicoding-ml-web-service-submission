FROM ubuntu:20.04
FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

ENV PORT=8000

CMD npm start