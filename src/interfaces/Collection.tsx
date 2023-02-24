interface BasicInformation {
    cover_image: string
    title: string
    year: number
    artists: Artist[]
    genres: string[]
}

interface Artist {
    name: string
    id: number
}

export interface ReleaseInterface {
    id: number
    date_added: string
    rating: number
    basic_information: BasicInformation
}
