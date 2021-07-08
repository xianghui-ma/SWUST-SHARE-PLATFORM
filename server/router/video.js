// 与培训视频相关的路由

const { Router } = require('express'),
    router = Router();

// 发布培训视频
router.post('/', (req, res, next) => {
    res.send('发布培训视频');
});

// 修改培训视频
router.put('/:id', (req, res, next) => {
    res.send('修改培训视频');
});

// 删除培训视频
router.delete('/:id', (req, res, next) => {
    res.send('删除培训视频');
});

// 获取培训视频
router.get('/', (req, res, next) => {
    res.send('获取培训视频');
});

module.exports = router;