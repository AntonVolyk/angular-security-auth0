const util = require('util');
const cryptoBytes = require('crypto');

export const randomBytes = util.promisify(cryptoBytes.randomBytes);

