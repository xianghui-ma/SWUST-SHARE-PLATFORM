// 论文的验证器链数组

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
const idIdentify = param('id')//论文id验证
    .notEmpty({ ignore_whitespace: true })
    .withMessage('论文id不能为空')
    .bail()
    .custom(id => {
        if (!isValidObjectId(id)) {
            throw new Error('论文id格式错误');
        }
        return true;
    });

// 发布论文验证器链数组
exports.issuePaperValidator = [
    tokenIdentify,

    // 验证title
    body('paper.title')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('论文文章标题不能为空')
        .bail()
        .isString()
        .withMessage('论文文章标题不是字符串'),

    // 验证abstract
    body('paper.abstract')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('摘要不能为空')
        .bail()
        .isString()
        .withMessage('摘要不是字符串'),

    // 验证periodicalName
    body('paper.periodicalName')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('期刊不能为空')
        .bail()
        .isString()
        .withMessage('期刊不是字符串'),

    // 验证paperAuthor
    body('paper.paperAuthor')
        .isArray({ min: 1 })
        .withMessage('论文作者不能为空'),

    // 验证keyWords
    body('paper.keyWords')
        .isArray({ min: 1 })
        .withMessage('论文关键字不能为空'),

    // 验证author
    body('paper.author')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('上传者不能为空')
        .bail()
        .custom(author => {
            if (!isValidObjectId(author)) {
                throw new Error('上传者id格式错误');
            }
            return true;
        }),

    // 验证issueAt
    body('paper.issueAt')
        .notEmpty()
        .withMessage('论文发表时间不能为空')
];

// 修改论文验证器链数组
exports.updatePaperValidator = [
    tokenIdentify,
    idIdentify,
];

// 删除论文验证器链数组
exports.deletePaperValidator = [
    tokenIdentify,
    idIdentify,
];