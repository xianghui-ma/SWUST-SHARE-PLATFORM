// 与培训视频相关的路由

const { Router } = require('express'),
    router = Router();

const { issueVideoValidatorMiddleware, updateVideoValidatorMiddleware, deleteVideoValidatorMiddleware } = require('../validator/index');

// 发布培训视频
router.post('/', issueVideoValidatorMiddleware, (req, res, next) => {
    res.send('发布培训视频');
});

// 修改培训视频
router.put('/:id', updateVideoValidatorMiddleware, (req, res, next) => {
    res.send('修改培训视频');
});

// 删除培训视频
router.delete('/:id', deleteVideoValidatorMiddleware, (req, res, next) => {
    res.send('删除培训视频');
});

// 获取培训视频
router.get('/', (req, res, next) => {
    res.send('获取培训视频');
});

module.exports = router;