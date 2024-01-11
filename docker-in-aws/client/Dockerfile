FROM node:alpine as builder 

WORKDIR /app 

COPY /package.json ./

RUN npm install

COPY ./ ./

RUN npm run build 


FROM nginx 

EXPOSE 3000

#Docker 컨테이너에 있는 nginx 설정 파일을
#Local 환경에서 작성한 것으로 덮어주는 것이다. 
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html 