// 竞赛的验证器链数组

const { body, param, header } = require('express-validator'),
    { isValidObjectId } = require('mongoose'),
    { promisify } = require('util');

const { secretOrPublicKey } = require('../config/websitConfig'),
    jwt = require('jsonwebtoken');

// promise化jsonwebtoken中的verify
const verify = promisify(jwt.verify);

// 提取公共验证器链
const tokenIdentify = header('Authentication')//用户身份验证
    .notEmpty()
    .withMessage('你没有提供身份认证字段')
    .bail()
    .custom(async token => {
        try {
            await verify(token, secretOrPublicKey);
        } catch (error) {
            return Promise.reject('用户身份认证失败');
        }
    });
const idIdentify = param('id')//竞赛id验证
    .notEmpty({ ignore_whitespace: true })
    .withMessage('竞赛id不能为空')
    .bail()
    .custom(id => {
        if (!isValidObjectId(id)) {
            throw new Error('竞赛id格式错误');
        }
        return true;
    });

// 发布竞赛验证器链数组
exports.issueCompetitionValidator = [
    tokenIdentify,

    // 验证title
    body('competition.title')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('竞赛文章标题不能为空')
        .bail()
        .isString()
        .withMessage('竞赛文章标题不是字符串'),

    // 验证author
    body('competition.author')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('博文作者不能为空')
        .bail()
        .custom(author => {
            if (!isValidObjectId(author)) {
                throw new Error('作者id格式错误');
            }
            return true;
        })
];

// 修改竞赛验证器链数组
exports.updateCompetitionValidator = [
    tokenIdentify,
    idIdentify
];

// 删除竞赛验证器链数组
exports.deleteCompetitionValidator = [
    tokenIdentify,
    idIdentify,
];