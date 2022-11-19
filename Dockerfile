FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm","start","runserver","54.151.241.228"]