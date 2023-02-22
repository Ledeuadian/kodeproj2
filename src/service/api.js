import axios from "axios";

const urlMovies = "http://localhost:3000/Movies";

//get all Records or by ID
export const getAllMovies = async() => {
        try {
            // id = id || "";
            return await axios.get(urlMovies);
        } catch (error) {
            console.log(error);
        }
    }
//search by name
export const searchMovie = async(name) => {
    return await axios.get(`${urlMovies}?name=${name}`);  
}  

//Delete Records by id
export const deleteMovies = async(id) => {
    return await axios.delete(`${urlMovies}/${id}`);
}