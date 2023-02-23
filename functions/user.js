const axios = require("axios");

const { DISCOGS_API_URL, DISCOGS_USERNAME } = process.env;

exports.handler = async () => {
    const response = await axios.get(`${DISCOGS_API_URL}/users/${DISCOGS_USERNAME}`)

    return {
        statusCode: response.status,
        body: JSON.stringify(response.data)
    }
}