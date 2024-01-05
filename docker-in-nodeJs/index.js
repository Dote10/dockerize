import express from 'express';

//Constants
const PORT = 3000;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/',(req,res) =>{
    res.send("안녕학세요");
})

app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);
