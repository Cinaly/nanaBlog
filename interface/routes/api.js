const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// 创建数据库连接
const conn = mysql.createConnection({
    multipleStatements: true,
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

router.get('/getBlogSeries', (req, res) => {
    const sqlStr = 'select * from blog_series';
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

router.get('/getArticleList', (req, res)=>{
    const sqlStr =
        'select article_id as id, title, content,type_id,blog.series_id,series_name from blog,blog_series where blog.series_id=1 and blog.series_id=blog_series.series_id GROUP BY article_id;' +
        'select article_id as id, title, content,type_id,blog.series_id,series_name from blog,blog_series where blog.series_id=2 and blog.series_id=blog_series.series_id GROUP BY article_id;' +
        'select article_id as id, title, content,type_id,blog.series_id,series_name from blog,blog_series where blog.series_id=3 and blog.series_id=blog_series.series_id GROUP BY article_id;';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '获取失败', err: err});
        res.json({
            err_code: 0,
            message: '获取成功',
            data: results,
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
