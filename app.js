require("dotenv/config");
const express=require("express");

const PORT = process.env.PORT||5000;
const app = express();

const middleware = function (req,res,next){
    console.log("Yeni bir istek geldi.");
    next();
};

const middlewarePost = function (req,res,next){
    console.log("Post iseği için istek gönderildi.");
    next();
};


app.get("/hello",middleware,function(req, res){
    res.json("Merhaba, GET isteği attınız.");
})

app.post("/hello",middlewarePost,function(req, res,next){
    next();
    res.json("Merhaba, POST isteği attınız.");
})

app.put("/hello",middleware,function(req, res){
    res.json("Merhaba, PUT isteği attınız.");
})

app.delete("/hello",middleware,function(req, res){
    res.json("Merhaba, DELETE isteği attınız.");
})

app.use(middleware);

app.listen(PORT, ()=>{
    console.log(`Ready on http://localhost:${PORT}`);
});