// user的请求处理逻辑

const { sign } = require('jsonwebtoken');

const { userCollection } = require('../model/index'),
    { secretOrPublicKey } = require('../config/websitConfig');

// 注册
exports.logUp = async (req, res, next) => {
    let newUser = await new userCollection({
        ...req.body.user
    }).save();
    newUser=newUser.toJSON();
    delete newUser.password;
    newUser.token=sign(newUser, secretOrPublicKey);
    res.json(newUser);
}

// 登录
exports.logIn = (req, res, next) => {

}

// 上传头像
exports.uploadAvatar = (req, res, next) => {

}

// 修改用户
exports.updateUser = (req, res, next) => {

}