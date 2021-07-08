// 创建Running validations imperatively工具方法

const { validationResult } = require('express-validator');

// 完全验证。运行所有验证器，返回总的最终结果
exports.parallelValidate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};

// 不完全验证。一旦某个验证器发生错误，则直接返回错误，不再执行后面的验证器
exports.sequentialValidate = validations => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (result.errors.length) break;
        }

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};