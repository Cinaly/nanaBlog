const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// 创建数据库连接
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_blog'
});

// 设置跨域访问
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get('/getNames', (req, res) => {
    res.json({
        err_code: 0,
        message: 'success',
        name: 'lisa'
    });
});
router.post('/getMoney', (req, res) => {
    res.json({
        err_code: 0,
        message: 'success',
        name: '$50000'
    });
});

router.get('/getBlogType', (req, res) => {
    const sqlStr = 'select * from blog_type';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '获取失败', err: err});
        res.json({
            err_code: 0,
            message: '获取成功',
            list: results,
            affectedRows: 0
        });
    });
});


router.post('/writeArticle', (req, res)=>{
    const sqlStr = 'insert into blog set ?';
    console.log(req.body);
    conn.query(sqlStr, req.body, (err, results) => {
       if (err) return res.json({err_code: 1, message: '添加失败', err: err});
       if (results.affectedRows !== 1) return res.json({err_code: 2, message: '添加失败',});
        res.json({
            err_code: 0,
            message: '添加成功',
            affectedRows: results.affectedRows
        });
    });
});

module.exports = router;
