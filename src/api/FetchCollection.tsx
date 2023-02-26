import axios from "axios";
import {Release} from "../interfaces/Release";

function createRequestUrl(page: number, perPage: number): string {
    return `/.netlify/functions/collections?page=${page}&per_page=${perPage}`
}

function compilePageUrls(page: number, pages: number, perPage: number): string[] {
    let urls: string[] = []
    for (page++; page < pages+1; page++) {
        urls.push(createRequestUrl(page, perPage))
    }
    return urls
}

function checkTotalNumber(releases: Release[], items: number): boolean {
    return releases.length === items
}


export const fetchCollection = async () => {
    let page = 1
    const perPage = 10

    let releases: Release[] = []

    let response = await axios.get(createRequestUrl(page, perPage))
    releases.push(...response.data.releases)

    const {pages, items} = response.data.pagination
    const urls = compilePageUrls(page, pages, perPage)

    const requests = urls.map((url) => axios.get(url));
    const responses = await axios.all(requests)
    responses.forEach((response) => {
        releases.push(...response.data.releases)
    })

    if (!checkTotalNumber(releases, items) && releases) {
        console.log(`Found only ${responses.length} items from ${items}`)
    }
    return releases
}