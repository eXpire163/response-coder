FROM node

EXPOSE 8181

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force

COPY . .

CMD ["node", "index.js"]
