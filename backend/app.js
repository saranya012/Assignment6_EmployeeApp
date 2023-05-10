const Express=require('express')
const Mongoose=require('mongoose')
const Bodyparser=require('body-parser')
const Cors=require('cors')
const {empModel}=require("./models/Employee")

const app=Express()

app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.use(Cors())

//mongoose connection

Mongoose.connect("mongodb+srv://saranyaa365:Aayushi%402019@cluster0.q7fitnq.mongodb.net/EmployeeData?retryWrites=true&w=majority", { useNewUrlParser: true })

//signup

app.post('/register', async (req, res) => {

    var data = new signupModel(req.body)
    data.save(
        res.json({ status: 'Success' })
    )
})

app.post('/login', async (req, res) => {
    let data = signupModel()
    let username = req.body.username
    let password = req.body.password

    let user = await signupModel.findOne({ username: username })
    if (!user) {
        res.json({ status: "user not found" })
    }
    try {
        if (user.password == password) {
            res.json({ status: "login successfull" })
        } else {
            res.json({ status: "login failed" })
        }
    } catch (error) {

    }
})


app.get('/register', async (req, res) => {
    var data = await signupModel.find()
    res.json(data)

})

app.post("/addemployee",async(req,res)=>{
    let data= new empModel(req.body)
    let result= await data.save()
    //res.json(result)
    // res.send("Book entry test")
     res.json({"status":"success","data":result})

})

app.get("/viewemployee",async(req,res)=>{
    let data=await empModel.find()
    res.json(data)
})

app.post('/deleteemployee', async (req, res) => {
    let data = await empModel.deleteOne(req.body)
    res.json({ status: "Deleted Successfully" })
})



app.listen(3001,()=>{
    console.log("App is running")
})