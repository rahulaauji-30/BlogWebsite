import express from "express";
import bodyParser from "body-parser";

const app = express();
const port  = 3000;
let posts = [];
let blog;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{blogs:blog});
})

app.get("/addposts",(req,res)=>{
    res.render("addPosts.ejs");
})
app.post("/addposts",(req,res)=>{
    posts.push({title:req.body.title,description:req.body.description});
    blog = posts;
    res.redirect("/");
    console.log(posts);
})
app.get("/edit",(req,res)=>{
    res.render("edit.ejs")
})
app.patch("/edit",(req,res)=>{
    
})

app.delete("/delete",(req,res)=>{
    posts.forEach((post)=>{
        if(post ==req.body.title){

        }
    })
})
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})