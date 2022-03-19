FROM node:16 as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

COPY . .

FROM base as test
RUN npm install
RUN npm test

FROM base as dev
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]

FROM base as prod
RUN npm ci --production
EXPOSE 8080
CMD ["node", "index.js"]
