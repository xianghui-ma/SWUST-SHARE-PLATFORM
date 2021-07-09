// 与用户相关的路由

const { Router } = require('express'),
    router = Router();

const { logInValidatorMiddleware, logUpValidatorMiddleware, uploadAvatarValidatorMiddleware, updateUserValidatorMiddleware } = require('../validator/index');

// 注册
router.post('/users', logUpValidatorMiddleware, (req, res, next) => {
    res.send('注册');
});

// 登录
router.post('/user/login', logInValidatorMiddleware, (req, res, next) => {
    res.send('登录');
});

// 头像上传
router.put('/avatar', uploadAvatarValidatorMiddleware, (req, res, next) => {
    res.send('头像上传');
});

// 修改账户
router.put('/user', updateUserValidatorMiddleware, (req, res, next) => {
    res.send('修改账户');
});

module.exports = router;