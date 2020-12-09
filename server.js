const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.listen(8000, function () {
    console.log('listening on 8000')
})

app.get('/', function (req, res) {
    res.render('test.ejs')
});

app.get('/test2', function (req, res) {
    res.render('test2.ejs')
});

app.get('/f1', function (req, res) {
    res.render('f1.ejs')
});

app.get('/f2', function (req, res) {
    res.render('f2.ejs')
});


app.get('/f3', function (req, res) {
    res.render('f3.ejs')
});


app.get('/f4', function (req, res) {
    res.render('f4.ejs')
});


app.get('/f5', function (req, res) {
    res.render('f5.ejs')
});


app.get('/f6', function (req, res) {
    res.render('f6.ejs')
});


app.get('/f7', function (req, res) {
    res.render('f7.ejs')
});


app.get('/f8', function (req, res) {
    res.render('f8.ejs')
});

app.get('/last', function (req, res) {
    res.render('last.ejs')
});
