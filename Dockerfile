FROM node:latest as build-step
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
COPY package-lock.json ./
RUN npm install yarn -g
RUN yarn install --silent
COPY . ./
EXPOSE 9081/tcp

RUN yarn run start