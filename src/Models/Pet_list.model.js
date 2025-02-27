import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    catagory:{
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    health:{
        type: String,
        required: true,
    },
    adopted: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
    },
    avatar: {
        type: String,
        required:true
    }
}, { timestamps: true });

export const Pet = mongoose.model('Pet', petSchema);