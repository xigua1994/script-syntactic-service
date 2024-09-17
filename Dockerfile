FROM node:14
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache yarn
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["node", "./src/app.js"]