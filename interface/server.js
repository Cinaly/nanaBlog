const express = require('express');


const app = new express();
app.listen(3333);

// 解析表单的body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

// 路由配置
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);


