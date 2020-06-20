FROM node:alpine

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN mkdir -p /usr/app/api
WORKDIR /usr/app/api

COPY package.json /usr/app/api
COPY package-lock.json /usr/app/api

RUN npm install

COPY . /usr/app/api