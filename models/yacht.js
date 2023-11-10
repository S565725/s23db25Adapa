const mongoose = require("mongoose")
const yachtSchema = mongoose.Schema({
    Color: String,
    Yacht_Number: Number,
    Sizeof_Yacht: Number
})
module.exports = mongoose.model("yacht", yachtSchema);