const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModels=require('./models/Users')

const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://0.0.0.0:27017/MERN_CRUD")
    .then(() => console.log("Mongo connected"))

app.get("/",(req,res)=>{
    UserModels.find(req.body)
    .then((user)=>{
        console.log("user",user)
        return res.json(user);
    }).catch(err=>res.json(err))
})  

app.get("/getUser/:id", (req, res) => {
    const id=req.params.id
    UserModels.findById({_id:id})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.put("/updateUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModels.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
    .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.delete("/deleteUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModels.findByIdAndDelete({_id:id})
    .then((users)=>{console.log("users---deleted",users);
        return res.json(users)
    })
    .catch(err=>console.log("err",err))
})

app.post("/createUser", (req, res) => {
    UserModels.create(req.body)
        .then(user => { 
            console.log("user", user)
            return res.json(user)
        })
        .catch(err => res.json(err));
});
app.listen(3001,()=>{
    console.log("server is  running");
})

