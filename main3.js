const express = require("express");
const app = express();
const port = 30001;
const cors = require("cors");

app.use(cors());
app.get('/', function(req, res){
    res.send('메인 페이지');
});

app.get('/:name', function(req, res){
    const p = req.params;
    // console.log(p.name);
    // const q = req.query;
    // console.log(q);
    if(p.name == '김동연'){
        res.json({'info':'2-1 담임'});
    }else if(p.name == '이영기'){
        res.json({'info':'2-2 담임'});
    }else if(p.name == '김주영'){
        res.json({'info':'2-3 담임'});
    }else if(p.name == '김민기'){
        res.json({'info':'2-1 부담임'});
    }else{
        res.json({'info':'정보 없음'});
    }
});

// app.get('/dong', function(req, res){
//     // json파일 전송
//     res.json({'info':'2-1 담임'});
// })

// app.get('/young', function(req, res){
//     // json파일 전송
//     res.json({'info':'2-2 담임'});
// })

// app.get('/joo', function(req, res){
//     // json파일 전송
//     res.json({'info':'2-3 담임'});
// })

// app.get('/min', function(req, res){
//     // json파일 전송
//     res.json({'info':'2-1 부담임'});
// })

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});