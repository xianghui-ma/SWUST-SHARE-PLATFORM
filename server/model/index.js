// 集成数据库的初始化操作，包括：创建集合、连接数据库

const { model, connect, connection, set } = require('mongoose');

const blogSchema = require('./blog'),
    competitionSchema = require('./competition'),
    paperSchema = require('./paper'),
    sourceSchema = require('./source'),
    userSchema = require('./user'),
    videoSchema = require('./video'),
    { dbUrl } = require('../config/websitConfig');

// 设置mongoose，以避免出现DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version和Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version
set('useNewUrlParser', true);
set('useUnifiedTopology', true);

// 连接数据库
connect(dbUrl, { useNewUrlParser: true });
connection.on('error', console.error.bind(console, 'connection error:'));
connection.on('open', () => {
    console.log('******connect db successfully******');
});

// 根据Schema创建集合
module.exports = {
    blogCollection: model('blogs', blogSchema),
    competitionCollection: model('competitions', competitionSchema),
    paperCollection: model('papers', paperSchema),
    sourceCollection: model('sources', sourceSchema),
    userCollection: model('users', userSchema),
    videoCollection: model('videos', videoSchema)
};