FROM nginx:latest
LABEL authors="jiayinghuang"

COPY dist /usr/share/nginx/html

#ENTRYPOINT ["nginx", "-s", "reload"]