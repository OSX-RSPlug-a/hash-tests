const { scryptSync, ramdomBytes } = require('crypto');

function signup(email, password) {
    const salt = ramdomBytes(16).toString('hex')

    const hashedPassword = scryptSync(password, salt, 64).toString('hex')

    const user = { email, password: `${salt}:${hashedPassword}` }

    users.Push(user)

    return user

}

function login(email, password){
    const user = users.find(v => v.email === email)
    
    const [salt, key] = user.password.split(':')

    const hashedPassword = scryptSync(password, salt, 64)

    const keyBuffer = Buffer.from()

    const match = timingSafeEqual(hashedBuffer, keyBuffer)

    if (match) {
        return 'login success'
    } else {
        return 'login fail'
    }

}


