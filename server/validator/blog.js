// 博文的验证器链数组

const { body, param } = require('express-validator'),
    { isValidObjectId } = require('mongoose');

const { tokenIdentify } = require('./commonItem'),
{blogCollection}=require('../model/index');

// 提取公共验证器链
const idIdentify = param('id')//博文id验证
    .notEmpty({ ignore_whitespace: true })
    .withMessage('博文id不能为空')
    .bail()
    .custom(id => {
        if (!isValidObjectId(id)) {
            throw new Error('博文id格式错误');
        }
        return true;
    });

// 发布博文验证器链数组
exports.issueBlogValidator = [
    tokenIdentify,

    // 验证title
    body('article.title')
        .notEmpty()
        .withMessage('博文标题不能为空')
        .bail()
        .isString()
        .withMessage('博文标题不是字符串'),

    // 验证author
    body('article.author')
        .notEmpty({ ignore_whitespace: true })
        .withMessage('博文作者不能为空')
        .bail()
        .custom(author => {
            if (!isValidObjectId(author)) {
                throw new Error('作者id格式错误');
            }
            return true;
        })
        .bail()
        .custom(async author=>{
            let user = await blogCollection.findById(author).exec();
            if(!user){
                return Promise.reject('博文作者不存在');
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