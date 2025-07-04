import axios from "axios";
import { data } from "react-router-dom";

const API_URL = 'https://6862462196f0cc4e34b90470.mockapi.io/GymBro'

const submitFormData = async(data) => {
    try{
        const responce = await axios.post(API_URL , {

             e_name: data.name,
             e_email: data.email,
             e_phone: data.phone,
             e_membership: data.membership,
             e_age: data.age,
        })

        return responce.data;
    }catch(error){
        throw error;
    }
}
export default submitFormData;