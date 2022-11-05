import mongoose  from "mongoose";

const WeatheSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    wind: {
        type : String,
        required: true,
    },
    base : {
        type : String,
        required : true,
    },
    coord : {
        type : String,
        required : true,
    }
})

export default mongoose.model("Weather",WeatheSchema);