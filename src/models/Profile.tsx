export interface Profile {
    id: string,
    username: string,
    picture: string | null,
}

export const defaultProfile: Profile = {
    id: '0',
    username: "Unknown",
    picture: null
}