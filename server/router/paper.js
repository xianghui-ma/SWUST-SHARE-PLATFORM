// 与论文相关的路由

const { Router } = require('express'),
    router = Router();

const { issuePaperValidatorMiddleware, updatePaperValidatorMiddleware, deletePaperValidatorMiddleware } = require('../validator/index');

// 发布论文
router.post('/', issuePaperValidatorMiddleware, (req, res, next) => {
    res.send('发布论文');
});

// 修改论文
router.put('/:id', updatePaperValidatorMiddleware, (req, res, next) => {
    res.send('修改论文');
});

// 删除论文
router.delete('/:id', deletePaperValidatorMiddleware, (req, res, next) => {
    res.send('删除论文');
});

// 获取论文
router.get('/', (req, res, next) => {
    res.send('获取论文');
});

module.exports = router;