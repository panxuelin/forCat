'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_123';

    // add your config here
    config.middleware = ['robot'];

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    };

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0'
    };

    config.robot = {
        ua: [
            /Baiduspider/i
        ]
    }

    config.mysql = {
        //单数据源
        client: {
            host: 'localhost',
            port: '3306',
            user: 'test_user',
            password: 'test_password',
            database: 'mysql'
        },
        /*多数据源*/
        /*
         clients: {
                    db1:{
                        host:'mysql.com',
                        port:'3306',
                        user:'test_user',
                        password:'test_password',
                        database:'test',
                    },
                    db2:{
                        host:'mysql2.com',
                        port:'3307',
                        user:'test_user',
                        password:'test_password',
                        database:'test',
                    }
                },
                // 所有数据库配置的默认值
                default: {

                },
                */

        app: true,
        agent: false
    }


    return config;
};
