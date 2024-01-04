# Dockerfile -> 도커 이미지 -> 도커컨테이너(NodeJS App)

FROM node 

WORKDIR /usr/src/app 

# local에 있는 다른 파일들을 copy하기전에
# Node 모듈 종속성 주입을 위해 pakage.json을 먼저 copy해준다. 
COPY package*.json ./

# yarn은 NodeJS로 만들어진 모듈을 웹에서 받아서
#package.json에 적혀진 정보를 기반으로  설치하고 관리해 준다.
RUN yarn install

COPY ./ ./

EXPOSE 3000


CMD [ "yarn","start" ]