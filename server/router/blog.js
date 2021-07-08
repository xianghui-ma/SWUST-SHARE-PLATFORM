// 与博文相关的路由

const { Router } = require('express'),
    router = Router();

// 发布博文
router.post('/', (req, res, next) => {
    res.send('发布博文');
});

// 修改博文
router.put('/:id', (req, res, next) => {
    res.send('修改博文');
});

// 删除博文
router.delete('/:id', (req, res, next) => {
    res.send('删除博文');
});

// 获取博文
router.get('/', (req, res, next) => {
    res.send('获取博文');
});

module.exports = router;