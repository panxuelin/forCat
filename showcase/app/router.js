'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.get('/user/index', controller.user.info);
    router.get('/user/register', controller.user.register);
};
