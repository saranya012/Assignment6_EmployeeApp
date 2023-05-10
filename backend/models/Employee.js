const Mongoose=require('mongoose')

let EmployeeSchema=Mongoose.Schema(
    {
        empName:String,
        designation:String,
        department:String,
        experience:Number
    }
)

var empModel=Mongoose.model("employees", EmployeeSchema)
module.exports={empModel}