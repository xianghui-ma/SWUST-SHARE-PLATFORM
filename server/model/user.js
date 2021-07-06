// 定义用户的Schema

const { Schema } = require('mongoose');

const md5 = require('../util/md5');

module.exports = Schema({
    email: {//邮箱
        type: String,
        require: true
    },
    username: {//用户名
        type: String,
        require: true
    },
    password: {//密码
        type: String,
        require: true,
        select: false,
        set: md5
    },
    avatar: {//头像URL
        type: String,
        require: true,
        default: null
    }
});