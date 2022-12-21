import express from 'express';

const router=express.Router();
const users=[
    {
        "id":1,
        "firstName":"anand",
        "lastName":"yadav",
        "age":25
    },
    {
        "id":2,
        "firstName":"raman",
        "lastName":"sharma",
        "age":23
    },
    {
        "id":3,
        "firstName":"aman",
        "lastName":"kumar",
        "age":20
    },
    {
        "id":4,
        "firstName":"adity",
        "lastName":"singh",
        "age":50
    },
    {
        "id":5,
        "firstName":"Ankit",
        "lastName":"shaw",
        "age":17
    },
    {
        "id":6,
        "firstName":"satyam",
        "lastName":"srivatav",
        "age":35
    },
]

router.post("/",(req,res)=>{
    const u=req.body;
    users.push(u);
    res.send(`User Add Successfully Name:${u.firstName}${u.lastName}`);
});
router.put("/:id",(req,res)=>{
    const u=req.params.id;
    const msg=null;
    for(let i=0;i<users.length;i++)
    {
        if(u==users[i].id)
        {
            users[i].firstName=req.body.firstName;
            users[i].lastName=req.body.lastName;
            users[i].age=req.body.age;
            msg="hi";
        }
    }
    
    res.send(msg);
});
router.get("/",async(req,res) => {
    const data= await users;
    res.send(data);
});

router.get("/:id",async(req,res) => {
    var data=[];
    for(let i=0;i<users.length;i++) {

        if(users[i].id==req.params.id)
        {
            data= await users[i];
        }
    }    
    if(data.id == req.params.id)
    {
        res.send(data);
    }else{
        res.send(`No Matching Data For Id:${req.params.id}`);
    }
});

export default router;