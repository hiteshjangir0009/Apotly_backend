import mongoose from "mongoose";

const AdoptionRequestSchema = new mongoose.Schema({
    parent_name: {
        type: String,
        required: true
    },
    parent_email: {
        type: String,
        required: true
    },
    parent_phone: {
        type: String,
        required: true
    },
    parent_address: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    pet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    
},{ timestamps: true });

export const AdoptionRequest = mongoose.model('AdoptionRequest', AdoptionRequestSchema);