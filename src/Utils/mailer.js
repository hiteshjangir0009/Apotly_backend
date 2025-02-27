import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendAdoptionRequestToCompany = async (adoptionDetails) => {
    const { parent_name, parent_email, parent_phone, parent_address, message, pet_id } = adoptionDetails;

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.COMPANY_EMAIL, // Your company email
            subject: "New Pet Adoption Request",
            html: `
                <h3>New Adoption Request Received</h3>
                <p><strong>Parent Name:</strong> ${parent_name}</p>
                <p><strong>Email:</strong> ${parent_email}</p>
                <p><strong>Phone:</strong> ${parent_phone}</p>
                <p><strong>Address:</strong> ${parent_address}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p><strong>Pet ID:</strong> ${pet_id}</p>
            `,
        });

        console.log("Email sent via Resend!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
