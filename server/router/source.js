// 与网站链接和工具下载相关的路由

const { Router } = require('express'),
    router = Router();

const { issueSourceValidatorMiddleware, deleteSourceValidatorMiddleware, updateSourceValidatorMiddleware } = require('../validator/index'),
{issueSource,updateSource,deleteSource,getSource}=require('../controller/source');

// 发布网站链接和工具下载
router.post('/', issueSourceValidatorMiddleware, issueSource);

// 修改网站链接和工具下载
router.put('/:id', updateSourceValidatorMiddleware, updateSource);

// 删除网站链接和工具下载
router.delete('/:id', deleteSourceValidatorMiddleware, deleteSource);

// 获取网站链接和工具下载
router.get('/', getSource);

module.exports = router;