FROM node:latest as build-step
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
COPY yarn.lock ./
RUN yarn install --silent
COPY . ./
EXPOSE 9081/tcp

CMD ["yarn", "run", "start"]