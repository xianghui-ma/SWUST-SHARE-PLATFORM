// 定义网站链接和工具下载的Schema

const { Schema } = require('mongoose');

module.exports = Schema({
    title: {//网站或工具的名字
        type: String,
        require: true,
        default: ''
    },
    description: {//网站或工具的描述
        type: String,
        require: true,
        default: ''
    },
    img: {//资源图片URL
        type: String,
        require: true,
        default: ''
    },
    link: {//网站或工具的链接
        type: String,
        require: true,
        default: ''
    },
    tag: {//标识资源属于网站链接还是工具下载类别，1表示网站链接，2表示工具下载
        type: Number,
        require: true,
        default: 0
    },
    createAt: {//发表时间
        type: Date,
        require: true,
        default: Date.now
    },
    author: {//上传者
        type: Schema.Types.ObjectId,
        ref: 'users',
        require: true,
        default: null
    }
});