// 集成所有路由

const { Router } = require('express'),
    router = Router();

const blogRouter = require('./blog'),
    competitionRouter = require('./competition'),
    paperRouter = require('./paper'),
    sourceRouter = require('./source'),
    userRouter = require('./user'),
    videoRouter = require('./video');

// 与用户相关的路由
router.use(userRouter);

// 与博文相关的路由
router.use('/articles', blogRouter);

// 与论文相关的路由
router.use('/papers', paperRouter);

// 与网站链接和工具下载相关的路由
router.use('/kits', sourceRouter);

// 与培训视频相关的路由
router.use('/videos', videoRouter);

// 与竞赛相关的路由
router.use('/competitions', competitionRouter);

module.exports = router;
