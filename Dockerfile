FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY package.json /usr/src/app/
COPY src /usr/src/app/src
COPY public /usr/src/app/public

RUN npm install
EXPOSE 3000
EXPOSE 35729

ENTRYPOINT [ "npm", "start" ]