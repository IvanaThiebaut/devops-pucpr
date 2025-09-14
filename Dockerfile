# a imagem base
FROM nginx:alpine

LABEL maintainer="Ivana Thiebaut"

# copiar os arquivos para dentro da imagem
COPY . /usr/share/nginx/html

EXPOSE 80