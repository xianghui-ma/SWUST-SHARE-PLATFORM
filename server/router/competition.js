// 与竞赛相关的路由

const { Router } = require('express'),
    router = Router();

// 发布竞赛
router.post('/', (req, res, next) => {
    res.send('发布竞赛');
});

// 修改竞赛
router.put('/:id', (req, res, next) => {
    res.send('修改竞赛');
});

// 删除竞赛
router.delete('/:id', (req, res, next) => {
    res.send('删除竞赛');
});

// 获取竞赛
router.get('/', (req, res, next) => {
    res.send('获取竞赛');
});

module.exports = router;