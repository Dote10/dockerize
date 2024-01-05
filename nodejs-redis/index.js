import express from 'express';
import {createClient}  from 'redis';

const client = createClient({
    socket:{
    host:"redis-server",
    port:6379
}
}).on('error',err => console.log('Redis Client',err))


const PORT = 4000;
const HOST = '0.0.0.0';

const app = express();

//숫자는 0 부터 시작합니다.
app.get('/',async(req,res) => {
    await client.connect();
    let number = await client.get("number");
    

    if(number == null) number = 0;
   res.send(`숫자가 1씩 올라갑니다. 숫자: ${number}`);

   await client.set("number",parseInt(number)+1);
   await client.disconnect();
    
});


app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);

