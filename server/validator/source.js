// 网站链接和工具下载的验证器链数组

const { body, param } = require('express-validator'),
    { isValidObjectId } = require('mongoose');

const { tokenIdentify } = require('./commonItem');

// 提取公共验证器链
const idIdentify = param('id')//网站链接和工具下载id验证
    .notEmpty({ ignore_whitespace: true })
    .withMessage('网站链接或工具下载id不能为空')
    .bail()
    .custom(id => {
        if (!isValidObjectId(id)) {
            throw new Error('网站链接或工具下载id格式错误');
        }
        return true;
    });

// 发布网站链接或工具下载验证器链数组
exports.issueSourceValidator = [
    tokenIdentify,

    // 验证title
    body('kit.title')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('网站链接或工具下载标题不能为空')
        .bail()
        .isString()
        .withMessage('网站链接或工具下载标题不是字符串'),

    // 验证description
    body('kit.description')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('网站链接或工具下载描述不能为空')
        .bail()
        .isString()
        .withMessage('网站链接或工具下载描述不是字符串'),

    // 验证link
    body('kit.link')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('网站链接或工具下载链接不能为空')
        .bail()
        .isURL()
        .withMessage('网站链接或工具下载链接不是合法URL'),

    // 验证tag
    body('kit.tag')
        .notEmpty()
        .withMessage('标签不能为空')
        .bail()
        .isNumeric({ no_symbols: true })
        .withMessage('标签必须为数字'),

    // 验证img
    body('kit.img')
        .notEmpty()
        .withMessage('图片链接不能为空')
        .bail()
        .isURL()
        .withMessage('图片链接不是合法URL'),

    // 验证author
    body('kit.author')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('上传者不能为空')
        .bail()
        .custom(author => {
            if (!isValidObjectId(author)) {
                throw new Error('上传者id格式错误');
            }
            return true;
        })
];

// 修改网站链接和工具下载验证器链数组
exports.updateSourceValidator = [
    tokenIdentify,
    idIdentify,
];

// 删除网站链接和工具下载验证器链数组
exports.deleteSourceValidator = [
    tokenIdentify,
    idIdentify,
];