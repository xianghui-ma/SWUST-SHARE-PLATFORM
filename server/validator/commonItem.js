// 提取各验证器文件中的公共验证器链项

const { header } = require('express-validator'),
    { promisify } = require('util');

const { secretOrPublicKey } = require('../config/websitConfig'),
    jwt = require('jsonwebtoken');

// promise化jsonwebtoken中的verify
const verify = promisify(jwt.verify);

module.exports = {
    tokenIdentify: header('Authentication')//用户身份验证
        .notEmpty()
        .withMessage('你没有提供身份认证字段')
        .bail()
        .custom(async token => {
            try {
                await verify(token, secretOrPublicKey);
            } catch (error) {
                return Promise.reject('用户身份认证失败');
            }
        })
};