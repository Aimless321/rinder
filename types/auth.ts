export interface RegisterResponse {
    token: string,
    user: User
}

export interface User {
    uuid: string,
    diet: "omnivore" | "vegetarian" | "vegan",
    kosher: boolean,
    gluten_free: boolean,
    fish_free: boolean,
    dairy_free: boolean,
    alcohol_free: boolean,
    pork_free: boolean,
}