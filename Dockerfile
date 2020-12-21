FROM node:15.4.0-buster as build
RUN npm install -g @angular/cli
ADD . /build/
RUN cd build && npm install && ng build --prod
RUN ls build/dist

FROM nginx:1.19.6
COPY --from=build build/dist/cities-frontend /usr/share/nginx/html
