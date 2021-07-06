// 定义竞赛的Schema

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
    fileDownPath: {//比赛相关文件的压缩包下载路径
        type: String,
        require: false,
        default: ''
    },
    videoPath: {//比赛相关视频URL
        type: String,
        require: false,
        default: ''
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