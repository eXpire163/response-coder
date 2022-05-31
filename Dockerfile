FROM node

EXPOSE 8181

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run test

CMD ["node", "index.js"]
