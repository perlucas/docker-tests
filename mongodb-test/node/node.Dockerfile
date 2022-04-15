FROM node

USER node

WORKDIR /home/node/app

COPY . .

# RUN npm init

RUN npm install mongoose

RUN cat package.json

# RUN chown -R node .

# USER node

# CMD node index.js