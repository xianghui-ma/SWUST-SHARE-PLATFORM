// 与网站链接和工具下载相关的路由

const { Router } = require('express'),
    router = Router();

// 发布网站链接和工具下载
router.post('/', (req, res, next) => {
    res.send('发布网站链接和工具下载');
});

// 修改网站链接和工具下载
router.put('/:id', (req, res, next) => {
    res.send('修改网站链接和工具下载');
});

// 删除网站链接和工具下载
router.delete('/:id', (req, res, next) => {
    res.send('删除网站链接和工具下载');
});

// 获取网站链接和工具下载
router.get('/', (req, res, next) => {
    res.send('获取网站链接和工具下载');
});

module.exports = router;