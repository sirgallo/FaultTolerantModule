FROM node:17

RUN apt-get update
RUN apt-get install -y curl

WORKDIR /usr/src/repsys

COPY core ./core
COPY replicatedServer ./replicatedServer

COPY modAlias.ts \
    ServerConfigurations.ts \ 
    package.json \
    package-lock.json \
    gruntfile.js \
    tsconfig.json ./

RUN npm install
RUN npm run build:all

EXPOSE 5679 8765
CMD ["npm", "run", "start:repsys"]