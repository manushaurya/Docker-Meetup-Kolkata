#Instruction in the Dockerfile that the docker daemon follows while image building.
FROM node
WORKDIR /app
COPY . /app
RUN ["npm", "install"]
CMD ["node", "index.js"]