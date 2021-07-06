// 定义博文的Schema

const { Schema } = require('mongoose');

module.exports = Schema({
    title: {//文章标题
        type: String,
        require: true,
        default: ''
    },
    bodyPath: {//文章存储路径
        type: String,
        require: true,
        default: ''
    },
    tagList: {//文章标签列表
        type: Array,
        require: true,
        default: null
    },
    author: {//文章作者
        type: Schema.Types.ObjectId,
        ref: 'users',
        require: true,
        default: null
    },
    createAt: {//创建时间
        type: Date,
        default: Date.now
    }
});