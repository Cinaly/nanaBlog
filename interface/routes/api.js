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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Content-Type', 'application/json;charset=utf-8');
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

router.get('/getArticleDetail', (req, res) => {
    const article_id = req.query['articleId'];
    const sqlStr =
        'select * from blog where article_id = ?';
    conn.query(sqlStr, article_id, (err, results) => {
        if (err) return res.json({err_code: 1, message: '获取失败', err: err});
        res.json({
            err_code: 0,
            message: '获取成功',
            articleDetail: results,
            affectedRows: 0
        });
    });
});

router.post('/writeArticle', (req, res) => {
    const sqlStr = 'insert into blog set ?';
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

router.post('/updateArticle', (req, res) => {
    const sqlStr = 'update blog set title = ?, content = ?, type_id = ?, series_id = ? where article_id = ?';
    conn.query(sqlStr, [
        req.body.title,
        req.body.content,
        req.body.type_id,
        req.body.series_id,
        req.body.article_id,
    ], (err, results) => {
        if (err) return res.json({err_code: 1, message: '编辑失败', err: err});
        if (results.affectedRows !== 1) return res.json({err_code: 2, message: '编辑失败',});
        res.json({
            err_code: 0,
            message: '编辑成功',
            affectedRows: results.affectedRows
        });
    });
});

router.get('/getArticleList', (req, res) => {
    const series_id = req.query['seriesId'];
    const type_id = req.query['typeId'];
    console.log(series_id, type_id);
    let varId = '';
    let sqlStr =
        'select article_id as id, title, content,type_id,blog.series_id,series_name from blog,blog_series ' +
        'where is_delete=0 and blog.series_id=1 and blog.series_id=blog_series.series_id GROUP BY article_id;' +
        'select article_id as id, title, content,type_id,blog.series_id,series_name from blog,blog_series ' +
        'where is_delete=0 and blog.series_id=2 and blog.series_id=blog_series.series_id GROUP BY article_id;' +
        'select article_id as id, title, content,type_id,blog.series_id,series_name from blog,blog_series ' +
        'where is_delete=0 and blog.series_id=3 and blog.series_id=blog_series.series_id GROUP BY article_id;';
    
    if (series_id) {
        sqlStr = 'select article_id,content, title, series_name from blog,blog_series ' +
            'where is_delete=0 and blog.series_id = ? and blog.series_id = blog_series.series_id';
        varId = series_id;
    }
    
    if (type_id) {
        sqlStr = 'select article_id,content, title, type_name from blog,blog_type ' +
            'where is_delete=0 and blog.type_id = ? and blog.type_id = blog_type.type_id';
        varId = type_id;
    }
    
    conn.query(sqlStr, varId, (err, results) => {
        if (err) return res.json({err_code: 1, message: '获取失败', err: err});
        res.json({
            err_code: 0,
            message: '获取成功',
            data: results,
            affectedRows: 0
        });
    });
});

router.get('/searchArticle', (req, res) => {
    const key = req.query['key'];
    const sqlStr =
        'select article_id, title from blog where title like ?';
    conn.query(sqlStr, '%' + key + '%', (err, results) => {
        if (err) return res.json({err_code: 1, message: '获取失败', err: err});
        res.json({
            err_code: 0,
            message: '获取成功',
            list: results,
            affectedRows: 0
        });
    });
});

router.get('/deleteArticle', (req, res) => {
    const article_id = req.query['articleId'];
    const sqlStr =
        'update blog set is_delete=1 where article_id = ?';
    conn.query(sqlStr, article_id, (err, results) => {
        if (err) return res.json({err_code: 1, message: '删除失败', err: err});
        res.json({
            err_code: 0,
            message: '删除成功',
            result: results,
            affectedRows: 0
        });
    });
});

router.get('/getTags', (req, res) => {
    const sqlStr = 'select * from blog_tag';
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

module.exports = router;
