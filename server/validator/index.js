// 集成所有验证器链数组，输出验证器中间件

const { sequentialValidate } = require('../util/validate'),
    { issueBlogValidator, deleteBlogValidator, updateBlogValidator } = require('./blog'),
    { issueCompetitionValidator, deleteCompetitionValidator, updateCompetitionValidator } = require('./competition'),
    { issuePaperValidator, deletePaperValidator, updatePaperValidator } = require('./paper'),
    { issueSourceValidator, deleteSourceValidator, updateSourceValidator } = require('./source'),
    { logUpValidator, logInValidator, updateUserValidator, uploadAvatarValidator } = require('./user'),
    { issueVideoValidator, deleteVideoValidator, updateVideoValidator } = require('./video');

module.exports = {
    issueBlogValidatorMiddleware: sequentialValidate(issueBlogValidator),
    deleteBlogValidatorMiddleware: sequentialValidate(deleteBlogValidator),
    updateBlogValidatorMiddleware: sequentialValidate(updateBlogValidator),
    issueCompetitionValidatorMiddleware: sequentialValidate(issueCompetitionValidator),
    deleteCompetitionValidatorMiddleware: sequentialValidate(deleteCompetitionValidator),
    updateCompetitionValidatorMiddleware: sequentialValidate(updateCompetitionValidator),
    issuePaperValidatorMiddleware: sequentialValidate(issuePaperValidator),
    deletePaperValidatorMiddleware: sequentialValidate(deletePaperValidator),
    updatePaperValidatorMiddleware: sequentialValidate(updatePaperValidator),
    issueSourceValidatorMiddleware: sequentialValidate(issueSourceValidator),
    deleteSourceValidatorMiddleware: sequentialValidate(deleteSourceValidator),
    updateSourceValidatorMiddleware: sequentialValidate(updateSourceValidator),
    logUpValidatorMiddleware: sequentialValidate(logUpValidator),
    logInValidatorMiddleware: sequentialValidate(logInValidator),
    updateUserValidatorMiddleware: sequentialValidate(updateUserValidator),
    uploadAvatarValidatorMiddleware: sequentialValidate(uploadAvatarValidator),
    issueVideoValidatorMiddleware: sequentialValidate(issueVideoValidator),
    deleteVideoValidatorMiddleware: sequentialValidate(deleteVideoValidator),
    updateVideoValidatorMiddleware: sequentialValidate(updateVideoValidator)
};