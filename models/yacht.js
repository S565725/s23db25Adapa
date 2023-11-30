const mongoose = require("mongoose")
const yachtSchema = mongoose.Schema({
    Color: String,
    Yacht_Number: {
        type:Number,
        min:1,
        max:5000
    },
    Sizeof_Yacht: {
        type:Number,
        min:1,
        max:20000
    }
})
module.exports = mongoose.model("yacht", yachtSchema);