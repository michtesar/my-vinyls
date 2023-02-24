import axios from "axios";

export const fetchUser = async () => {
    return await axios.get('/.netlify/functions/user')
}