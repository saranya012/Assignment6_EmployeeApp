const mongoose = require('mongoose')
const signupSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    password: String
})
const signupModel = mongoose.model(
    "Signups", signupSchema
)
module.exports = { signupModel }