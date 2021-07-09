// 与博文相关的路由

const { Router } = require('express'),
    router = Router();

const { issueBlogValidatorMiddleware, updateBlogValidatorMiddleware, deleteBlogValidatorMiddleware } = require('../validator/index');

// 发布博文
router.post('/', issueBlogValidatorMiddleware, (req, res, next) => {
    res.send('发布博文');
});

// 修改博文
router.put('/:id', updateBlogValidatorMiddleware, (req, res, next) => {
    res.send('修改博文');
});

// 删除博文
router.delete('/:id', deleteBlogValidatorMiddleware, (req, res, next) => {
    res.send('删除博文');
});

// 获取博文
router.get('/', (req, res, next) => {
    res.send('获取博文');
});

module.exports = router;