// md5加密工具方法（使用NodeJS原生加密算法）

const crypto = require('crypto');

module.exports = (str) => {
    return crypto.createHash('md5')
                 .update(str)
                 .digest('hex');
}