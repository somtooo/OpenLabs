var express=require("express"),
    app=express()    
    
    app.get("/",function(req,res){
        res.render("landing"); 
     });
     
app.set("view engine","ejs");
app.listen(3000,function(){
    console.log("The Open Labs Has Started!");
});
