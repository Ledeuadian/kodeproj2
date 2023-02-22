import axios from "axios";

const urlMovies = "http://localhost:3000/Movies";
const urlTvSeries = "http://localhost:3000/Series";
const urlUsers = "http://localhost:3000/users";

//get all Records or by ID
export const getAllMovies = async(id) => {
        try {
            id = id || "";
            return await axios.get(`${urlMovies}/${id}`);
        } catch (error) {
            console.log(error);
        }
    }
//search by Title
export const searchMovie = async(name) => {
    return await axios.get(`${urlMovies}?name=${name}`);  
}  

//Add new Movie
export const addMovie = async(movie) => {
    return await axios.post(urlMovies, movie);
}
//Delete Movie Records by id
export const deleteMovie = async(id) => {
    return await axios.delete(`${urlMovies}/${id}`);
}

//Edit Movie
export const editMovies = async(id, movie) => {
    return await axios.put(`${urlMovies}/${id}`, movie);
}

//----------------------------TV Series----------------------//

//get all Records or by ID
export const getAllTvSeries = async(id) => {
    try {
        id = id || "";
        return await axios.get(`${urlTvSeries}/${id}`);
    } catch (error) {
        console.log(error);
    }
}
//search by Title
export const searchTvSeries = async(name) => {
return await axios.get(`${urlTvSeries}?name=${name}`);  
}  

//Add new Movie
export const addTvSeries = async(series) => {
return await axios.post(urlTvSeries, series);
}
//Delete Movie Records by id
export const deleteTvSeries = async(id) => {
return await axios.delete(`${urlTvSeries}/${id}`);
}

//Edit Movie
export const editTvSeries = async(id, series) => {
return await axios.put(`${urlTvSeries}/${id}`, series);
}

//----------USER--------------//
export const getAllUser = async(id) => {
    try {
        id = id || "";
        return await axios.get(`${urlUsers}/${id}`);
    } catch (error) {
        console.log(error);
    }
}
//search by Title
export const searchUser = async(name) => {
    return await axios.get(`${urlUsers}?name=${name}`);  
}  
//Delete Movie Records by id
export const deleteUser = async(id) => {
    return await axios.delete(`${urlUsers}/${id}`);
}