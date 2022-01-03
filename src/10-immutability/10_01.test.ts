import { makeHairStyle, UserType } from "./10_01"



test('reference type test', () => {
    let user: UserType = {
        name: 'Dymich',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)

})



test(' change  address', () => {
    let user: UserType = {
        name: 'Dymich',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = moveUser(user, 'Kiev')

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)

})