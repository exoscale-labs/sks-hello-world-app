FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY app.js .
# COPY node_modules/ ./

EXPOSE 3000

USER node


ENTRYPOINT ["node", "app.js"]