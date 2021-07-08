// 与论文相关的路由

const { Router } = require('express'),
    router = Router();

// 发布论文
router.post('/',(req,res,next)=>{
    res.send('发布论文');
});

// 修改论文
router.put('/:id',(req,res,next)=>{
    res.send('修改论文');
});

// 删除论文
router.delete('/:id',(req,res,next)=>{
    res.send('删除论文');
});

// 获取论文
router.get('/',(req,res,next)=>{
    res.send('获取论文');
});

module.exports = router;