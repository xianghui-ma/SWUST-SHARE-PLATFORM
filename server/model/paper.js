// 定义论文的Schema

const { Schema } = require('mongoose');

module.exports = Schema({
    title: {//论文标题
        type: String,
        require: true,
        default: ''
    },
    abstract: {//论文摘要
        type: String,
        require: true,
        default: ''
    },
    bodyPath: {//文章存储路径
        type: String,
        require: true,
        default: ''
    },
    periodicalName: {//期刊名称
        type: String,
        require: true,
        default: ''
    },
    paperAuthor: {//论文作者
        type: Array,
        require: true,
        default: null
    },
    keyWords: {//论文关键词
        type: Array,
        require: true,
        default: null
    },
    author: {//上传者
        type: Schema.Types.ObjectId,
        ref: 'users',
        require: true,
        default: null
    },
    uploadAt: {//上传时间
        type: Date,
        require: true,
        default: Date.now
    },
    issueAt: {//论文发表时间
        type: String,
        require: true,
        default: ''
    }
});