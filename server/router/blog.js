// 与博文相关的路由

const { Router } = require('express'),
    router = Router();

const { issueBlogValidatorMiddleware, updateBlogValidatorMiddleware, deleteBlogValidatorMiddleware } = require('../validator/index'),
    { issueBlog, updateBlog, deleteBlog, getBlog } = require('../controller/blog');

// 发布博文
router.post('/', issueBlogValidatorMiddleware, issueBlog);

// 修改博文
router.put('/:id', updateBlogValidatorMiddleware, updateBlog);

// 删除博文
router.delete('/:id', deleteBlogValidatorMiddleware, deleteBlog);

// 获取博文
router.get('/', getBlog);

module.exports = router;