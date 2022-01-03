export type UserType = {
    name: string
    hair: number
    address: {title: string}
}



export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}