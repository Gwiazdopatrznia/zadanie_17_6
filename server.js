var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/static', express.static('assets'));

app.get('/', function (req, res) {
    res.render('login-page');
});

app.get('/logged', function (req, res) {
    res.render('after-logging', {
    	login: req.query.login
    });
});

app.get('/auth/google', function (req, res) {
    res.render('after-logging');
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
