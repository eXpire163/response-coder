FROM node

EXPOSE 8181

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json* ./

RUN npm install --omit=optional && npm cache clean

COPY . .

RUN npm run test

CMD ["node", "index.js"]
