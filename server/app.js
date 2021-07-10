// 入口文件

const express = require('express'),
morgan=require('morgan');

const webSitRouter = require('./router/index');

const app = express();

// 设置服务器端口
const port = process.env.PORT || 3000;

// 配置常用中间件
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(morgan('dev'));

// 创建集合并连接数据库
require('./model/index');

// 引入集成路由
app.use('/api', webSitRouter);

// 后台错误处理中间件
app.use(function (err, req, res, next) {
    res.status(500).send('服务器端出错');
});

// 启动并监听服务器
app.listen(port, () => {
    console.log(`open http://localhost:${port} in browser`);
});