// 用户的验证器链数组

const { body } = require('express-validator'),
    { isValidObjectId } = require('mongoose');

const { tokenIdentify } = require('./commonItem');

// 提取公共验证器链
const emailIdentify = body('user.email')//用户邮箱验证
    .notEmpty({ ignore_whitespace: true })
    .withMessage('邮箱不能为空')
    .bail()
    .isString()
    .withMessage('邮箱必须是字符串')
    .bail()
    .isEmail()
    .withMessage('邮箱格式错误');
const passwordIdentify = body('user.password')//用户密码验证
    .notEmpty({ ignore_whitespace: true })
    .withMessage('密码不能为空')
    .bail()
    .isString()
    .withMessage('密码必须是字符串')
    .bail()
    .isLength({ min: 6 })
    .withMessage('密码至少六位');

// 注册验证器链数组
exports.logUpValidator = [
    // 验证username
    body('user.username')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('用户名不能为空')
        .bail()
        .isString()
        .withMessage('用户名必须是字符串'),

    emailIdentify,
    passwordIdentify
];

// 登录验证器链数组
exports.logInValidator = [
    emailIdentify,
    passwordIdentify
];

// 头像上传验证器链数组
exports.uploadAvatarValidator = [
    tokenIdentify,

    // 验证userId
    body('user.userId')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('用户id不能为空')
        .bail()
        .custom(id => {
            if (!isValidObjectId(id)) {
                throw new Error('用户id格式错误');
            }
            return true;
        })
];

// 修改账户验证器链数组
exports.updateUserValidator = [
    tokenIdentify
];