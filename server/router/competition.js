// 与竞赛相关的路由

const { Router } = require('express'),
    router = Router();

const { issueCompetitionValidatorMiddleware, updateCompetitionValidatorMiddleware, deleteCompetitionValidatorMiddleware } = require('../validator/index'),
    { issueCompetition, updateCompetition, deleteCompetition, getCompetition } = require('../controller/competition');

// 发布竞赛
router.post('/', issueCompetitionValidatorMiddleware, issueCompetition);

// 修改竞赛
router.put('/:id', updateCompetitionValidatorMiddleware, updateCompetition);

// 删除竞赛
router.delete('/:id', deleteCompetitionValidatorMiddleware, deleteCompetition);

// 获取竞赛
router.get('/', getCompetition);

module.exports = router;