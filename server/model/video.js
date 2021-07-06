// 定义培训视频的Schema

const { Schema } = require('mongoose');

module.exports = Schema({
    title: {//视频的标题
        type: String,
        require: true,
        default: ''
    },
    path: {//视频URL
        type: String,
        require: true,
        default: ''
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