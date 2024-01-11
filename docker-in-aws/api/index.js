const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
 process.env.NODE_ENV === 'prod' ? 
    dotenv.config({path:'.env.dev'}) :
    dotenv.config({path:'.env.prod'});
const db = require('./db');


const app = express();
const PORT = 5000;

// json 형태로 오는 요청 본문을 해석할 수 있도록 등록
app.use(bodyParser.json());

//DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/list',function(req,res){
    //데이터베이스에서 모든 정보 가져오기
    db.pool.query(
        `SELECT * FROM list`,(error,results,fileds) =>{
            if(error)
                return res.status(500).send(error);
            else 
                return res.json(results);
         })
})

// 클라이언트에서 입력한 값을 데이터베이스에 입력하기
app.post('/api/list',function(req,res){
    //데이터베이스에 값 insert
    db.pool.query(`INSERT INTO list (item) VALUES("${req.body.item}")`,
    (error, results, fileds) =>{
        if(error)
            return res.status(500).send(error);
        else 
            return res.json({success : true, item: req.body.item })
    }) 
})


app.listen(PORT, () =>{
    console.log(`어플리케이션이 서버 ${PORT}에서 실행 되었습니다.`);
})