// 与用户相关的路由

const { Router } = require('express'),
    router = Router();

const { logInValidatorMiddleware, logUpValidatorMiddleware, uploadAvatarValidatorMiddleware, updateUserValidatorMiddleware } = require('../validator/index'),
    { logUp, logIn, uploadAvatar, updateUser } = require('../controller/user');

// 注册
router.post('/users', logUpValidatorMiddleware, logUp);

// 登录
router.post('/user/login', logInValidatorMiddleware, logIn);

// 头像上传
router.put('/avatar', uploadAvatarValidatorMiddleware, uploadAvatar);

// 修改账户
router.put('/user', updateUserValidatorMiddleware, updateUser);

module.exports = router;