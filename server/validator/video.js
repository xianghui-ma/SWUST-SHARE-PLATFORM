// 培训视频的验证器链数组

const { body, param } = require('express-validator'),
    { isValidObjectId } = require('mongoose');

const { tokenIdentify } = require('./commonItem');

// 提取公共验证器链
const idIdentify = param('id')//培训视频id验证
    .notEmpty({ ignore_whitespace: true })
    .withMessage('培训视频id不能为空')
    .bail()
    .custom(id => {
        if (!isValidObjectId(id)) {
            throw new Error('培训视频id格式错误');
        }
        return true;
    });

// 发布培训视频验证器链数组
exports.issueVideoValidator = [
    tokenIdentify,

    // 验证title
    body('video.title')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('培训视频标题不能为空')
        .bail()
        .isString()
        .withMessage('培训视频标题不是字符串'),

    // 验证author
    body('video.author')
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

// 修改培训视频验证器链数组
exports.updateVideoValidator = [
    tokenIdentify
];

// 删除培训视频验证器链数组
exports.deleteVideoValidator = [
    tokenIdentify,
    idIdentify,
];