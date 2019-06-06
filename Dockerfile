FROM node:11-alpine

RUN mkdir /app

WORKDIR /app

COPY .babelrc /app
COPY image /app/image
COPY index.html /app
COPY server.js /app
COPY bundle.js /app

COPY package.json /app
COPY webpack.config.js /app
COPY jest.config.js /app

RUN npm install
RUN npm install -D

EXPOSE 8080

COPY src /app/src

RUN npm run build

CMD ["npm", "run", "start"]
