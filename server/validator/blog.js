// blog的验证器链数组

const { body, isEmpty, param } = require('express-validator'),
    { isValidObjectId } = require('mongoose'),
    { promisify } = require('util');

const { secretOrPublicKey } = require('../config/websitConfig'),
    jwt = require('jsonwebtoken');

// promise化jsonwebtoken中的verify
const verify = promisify(jwt.verify);

// 提取公共验证器链
const tokenIdentify = header('Authentication')//用户身份验证
    .isEmpty()
    .withMessage('你没有提供身份认证字段')
    .bail()
    .custom(async token => {
        try {
            await verify(token, secretOrPublicKey);
        } catch (error) {
            return Promise.reject('用户身份认证失败');
        }
    });
const idIdentify = param('id')//博文id验证
    .isEmpty({ ignore_whitespace: true })
    .withMessage('博文id不能为空')
    .bail()
    .custom(id => {
        if (!isValidObjectId(id)) {
            throw new Error('博文id格式错误');
        }
    });

// 发布博文验证器链数组
exports.issueBlogValidator = [
    tokenIdentify,

    // 验证title
    body('article.title')
        .isEmpty({ ignore_whitespace: true })
        .withMessage('博文标题不能为空')
        .bail()
        .isString()
        .withMessage('博文标题不是字符串'),

    // 验证author
    body('article.author')
        .isEmpty({ ignore_whitespace: true })
        .withMessage('博文作者不能为空')
        .bail()
        .custom(author => {
            if (!isValidObjectId(author)) {
                throw new Error('作者id格式错误');
            }
        }),

    // 验证tagList数组
    body('article.tagList')
        .isArray({ min: 1 })
        .withMessage('必须为博文添加标签')
];

// 修改博文验证器链数组
exports.updateBlogValidator = [
    tokenIdentify,
    idIdentify
];

// 删除博文验证器链数组
exports.deleteBlogValidator = [
    tokenIdentify,
    idIdentify
];