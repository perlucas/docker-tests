FROM node

ARG NODE_WORKING_DIR

COPY . $NODE_WORKING_DIR

WORKDIR $NODE_WORKING_DIR

# RUN npm install

CMD node index.js