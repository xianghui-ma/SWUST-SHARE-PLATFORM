// 与竞赛相关的路由

const { Router } = require('express'),
    router = Router();

const { issueCompetitionValidatorMiddleware, updateCompetitionValidatorMiddleware, deleteCompetitionValidatorMiddleware } = require('../validator/index');

// 发布竞赛
router.post('/', issueCompetitionValidatorMiddleware, (req, res, next) => {
    res.send('发布竞赛');
});

// 修改竞赛
router.put('/:id', updateCompetitionValidatorMiddleware, (req, res, next) => {
    res.send('修改竞赛');
});

// 删除竞赛
router.delete('/:id', deleteCompetitionValidatorMiddleware, (req, res, next) => {
    res.send('删除竞赛');
});

// 获取竞赛
router.get('/', (req, res, next) => {
    res.send('获取竞赛');
});

module.exports = router;