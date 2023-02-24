import axios from "axios";

export const fetchCollection = async () => {
    return await axios.get(`/.netlify/functions/collections?page=1&per_page=10`)
}