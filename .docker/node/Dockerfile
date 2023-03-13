FROM node:alpine
WORKDIR /src
COPY package.json /
RUN npm install -g nodemon && npm install
COPY . .

CMD [ "npm", "run", "dev" ]