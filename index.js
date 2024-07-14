const express= require("express")
const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.use("/add-new-camping", (req, res,next) =>{
 res.send(
    `
    <h1>New Camping Place</h1>
    <form action="/camping" method="POST">
        <input type="text" placeholder="camping place" name="name" /> 
         <input type="text"  placeholder="ID"  name="id"/>
        <input type="submit" value="send"/>
    </form>
    `
 )   
})

app.use("/camping", (req,res,next)=>{
console.log(req.body);
//res.send('<h1>Student List</h1>')
res.redirect("/")
})
app.use("/",(req,res,next) => {
    console.log("MidleWare...");
    res.send('<h1>Camping</h1>'
    );
});

const PORT = process.env.PORT || 5010;
app.listen(PORT, ()=>{
    console.log("Server running on port:", PORT);
});