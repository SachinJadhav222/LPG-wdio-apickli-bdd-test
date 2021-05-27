FROM node:14

RUN mkdir lpg-api-tests

COPY ./ /lpg-api-tests

WORKDIR /lpg-api-tests

RUN npm install
