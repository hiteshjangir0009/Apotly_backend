import { AdoptionRequest } from "../Models/adoption_req.model.js";
import { API_response } from "../Utils/API_response.js";
import { Async_handler } from "../Utils/Async_handler.js";
import { sendAdoptionRequestToCompany } from "../Utils/mailer.js";




// Create Adoption Request
const Create_adoption_request = Async_handler(async (req, res) => {
    const { parent_name, parent_email, parent_phone, parent_address, message, pet_id } = req.body;

    // Check for empty fields
    if ([parent_name, parent_email, parent_phone, parent_address, message, pet_id].some((field) => !field?.trim())) {
        return res.status(400).json(
            new API_response(400, [], "All fields (parent_name, parent_email, parent_phone, parent_address, message, pet_id) are required")
        );
    }

    // Create new adoption request
    const newAdoptionRequest = new AdoptionRequest({
        parent_name,
        parent_email,
        parent_phone,
        parent_address,
        message,
        pet_id
    });


    // Save to database
    await newAdoptionRequest.save();

    // Send adoption request to company
    await sendAdoptionRequestToCompany({
        parent_name,
        parent_email,
        parent_phone,
        parent_address,
        message,
        pet_id,
    });

    return res.status(201).json(
        new API_response(201, newAdoptionRequest, "Adoption request created successfully")
    );
});

export { Create_adoption_request };