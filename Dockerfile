FROM node:erbium-alpine

ENV PORT 3000
RUN apk add g++ make
RUN apk add --no-cache python3 py3-pip


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json .npmrc /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app

RUN yarn build
EXPOSE $PORT

CMD [ "yarn", "start" ]
