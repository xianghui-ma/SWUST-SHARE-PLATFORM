// 与用户相关的路由

const { Router } = require('express'),
    router = Router();

// 注册
router.post('/users', (req, res, next) => {
    res.send('注册');
});

// 登录
router.post('/user/login', (req, res, next) => {
    res.send('登录');
});

// 头像上传
router.put('/avatar', (req, res, next) => {
    res.send('头像上传');
});

// 修改账户
router.put('/user', (req, res, next) => {
    res.send('修改账户');
});

module.exports = router;