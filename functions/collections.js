const axios = require("axios");
const {DISCOGS_TOKEN, DISCOGS_USERNAME, DISCOGS_API_URL} = process.env;

function composeUrl(per_page, page) {
    return `${DISCOGS_API_URL}/users/${DISCOGS_USERNAME}/collection/folders/0/releases?token=${DISCOGS_TOKEN}&per_page=${per_page}&page=${page}`
}

exports.handler = async () => {
    let allReleases = []
    let page = 1

    const response = await axios.get(composeUrl(10, page))
    const {pages, items} = response.data.pagination

    const {releases} = response.data

    allReleases.push(...releases)

    console.debug("Number of items", items)
    page++
    let urls = []
    for (page; page < pages; page++) {
        urls.push(composeUrl(10, page))
    }
    console.debug(urls)

    // axios.all(urls.map((url) => axios.get(url)))
    //     .then((response) => {
    //         console.log("Response >>> ", response)
    //         // allReleases.push(...data.data.releases)
    //     })
    console.log(allReleases.length)

    return {
        statusCode: 200,
        body: JSON.stringify({results: "Hello, world!"})
    }
}