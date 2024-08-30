FROM node:16-alpine
WORKDIR /index
COPY . /index
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]