FROM node

EXPOSE 8181

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force

COPY . .

RUN npm run test

CMD ["node", "index.js"]
