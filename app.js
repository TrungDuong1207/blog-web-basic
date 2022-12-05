const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) =>{
    res.render("blog");
});

let arrayBlog= []; 
app.post("/", (req, res) =>{
    if (req.body.blog) {
        const blog = {
            blog: req.body.blog
        }
        arrayBlog.push(blog);
        let a = arrayBlog.reverse();
    
        res.render("view", { blogs: a });
    } 
} )

app.listen(3000,()=>{
    console.log("listen port: 3000");
})