# 개발 환경과 다른 운영서버를 위한 Dockerfile작성
# 운영환경에서는 src폴더에 있는 html,js,css 파일을 사용하는 것이 아니라 
# build 폴더에 있는 것을 사용한다. 

# 1. build stage : 폴더를 생성하기 위한 부분(FROM부터 다음 FROM까지)
FROM node as builder 

WORKDIR '/usr/src/app'

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build
#build폴더에 파일들을 Nginx가 Web브라우저의 
#요청에 따라 제공해준다.  

# 2. run stage : 도커 이미지를 이용한 Nginx시작 

FROM nginx 

EXPOSE 80

COPY --from=builder /usr/src/app/build /usr/share/nginx/html 