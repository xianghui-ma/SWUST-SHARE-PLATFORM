// 与培训视频相关的路由

const { Router } = require('express'),
    router = Router();

const { issueVideoValidatorMiddleware, updateVideoValidatorMiddleware, deleteVideoValidatorMiddleware } = require('../validator/index'),
{issueVideo,updateVideo,deleteVideo,getVideo}=require('../controller/video');

// 发布培训视频
router.post('/', issueVideoValidatorMiddleware, issueVideo);

// 修改培训视频
router.put('/:id', updateVideoValidatorMiddleware, updateVideo);

// 删除培训视频
router.delete('/:id', deleteVideoValidatorMiddleware, deleteVideo);

// 获取培训视频
router.get('/', getVideo);

module.exports = router;