# Stage 1 - Build Process
FROM node:12.2.0-alpine as build-deps

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm install

COPY . /app
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-deps /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-deps /app/build/ /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
