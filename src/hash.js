const { createHash } = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let pass = 'yoyo@dude!'

const hash1 = hash(pass)

console.log(hash1)


password = 'yoyo@dude'

const hash2 = hash(password)

const match = hash1 === hash2


console.log(match ? 'good password' : 'password doesnt match')