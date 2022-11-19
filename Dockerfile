FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm","start","runserver","0.0.0.0:3000"]