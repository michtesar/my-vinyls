const axios = require("axios");
const {DISCOGS_TOKEN, DISCOGS_USERNAME, DISCOGS_API_URL} = process.env;

function composeUrl(per_page, page) {
    return `${DISCOGS_API_URL}/users/${DISCOGS_USERNAME}/collection/folders/0/releases?token=${DISCOGS_TOKEN}&per_page=${per_page}&page=${page}`
}

exports.handler = async (event) => {
    const {page, per_page} = event.queryStringParameters
    const response = await axios.get(composeUrl(per_page, page))

    return {
        statusCode: response.status,
        body: JSON.stringify(response.data)
    }
}