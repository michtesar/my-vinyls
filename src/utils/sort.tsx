import {Release} from "../interfaces/Release";

export function sortReleasesByTitle(releases: Release[]): Release[] {
    return releases.sort((a, b) => a.basic_information.title.localeCompare(b.basic_information.title))
}
