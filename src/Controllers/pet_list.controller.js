
import { Pet } from '../Models/Pet_list.model.js';
import { API_response } from '../Utils/API_response.js';
import { Async_handler } from '../Utils/Async_handler.js';
import {uploadOnCloudinary} from '../Utils/Cloudinary.js'

// Controller to add a new pet
const addPet = Async_handler(async (req, res) => {
    const { name, age, breed, description, catagory, health} = req.body;

    // Check for empty fields
    if ([name, age, breed, catagory, health].some((field) => !field?.trim())) {
        return res.status(400).json(
            new API_response(400, [], "All fields (name, age, breed, catagory, health) are required")
        );
    }

    //upload on cloudinary
    const avatarLocalPath = req.file?.path;
    //const coverImageLocalPath = req.files?.coverImage[0]?.path;


    console.log('img ==>>', avatarLocalPath);
    

    if (!avatarLocalPath) {
        return res.status(400).json(
            new API_response(400, [], "avatar field is required")
        );
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)

console.log("avatar ==>>",avatar.url);


    const newPet = new Pet({
        name,
        age,
        catagory,
        breed,
        health,
        description,
        avatar:avatar.url
    });

    await newPet.save();

    return res.status(201).json(
        new API_response(201, newPet, "Pet added successfully")
    );
});


// Controller to get all pets
const getPets = Async_handler(async (req, res) => {

    const params = req.query;
    console.log("params ==>>",params);

    if(!params.query){
        const pets = await Pet.find();

        return res.status(200).json(
            new API_response(200, pets, "Pets fetched successfully")
        );
    }
    else{
        const pets = await Pet.find({catagory:params.query});

        return res.status(200).json(
            new API_response(200, pets, "Pets fetched successfully")
        );
    }

   
});

export { addPet, getPets };