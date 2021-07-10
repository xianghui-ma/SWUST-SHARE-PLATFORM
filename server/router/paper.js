// 与论文相关的路由

const { Router } = require('express'),
    router = Router();

const { issuePaperValidatorMiddleware, updatePaperValidatorMiddleware, deletePaperValidatorMiddleware } = require('../validator/index'),
    { issuePaper, updatePaper, deletePaper, getPaper } = require('../controller/paper');

// 发布论文
router.post('/', issuePaperValidatorMiddleware, issuePaper);

// 修改论文
router.put('/:id', updatePaperValidatorMiddleware, updatePaper);

// 删除论文
router.delete('/:id', deletePaperValidatorMiddleware, deletePaper);

// 获取论文
router.get('/', getPaper);

module.exports = router;