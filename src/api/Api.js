import axios from "axios";

/* Put the base for api requests here */

const API = axios.create({
    //baseURL: "http://problem-framing.ucsd.edu:4000/",
    //baseURL: "http://localhost:3000/",
    baseURL: "search-explanations.firebaseapp.com"
});


export default API;  