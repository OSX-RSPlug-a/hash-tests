const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const message = 'i like turtles';

const key = randomBytes(32);

const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');

console.log(`Encrypted: ${encryptedMessage}`);

const decipher = createDecipheriv('aes256', key, iv);

const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');

console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);