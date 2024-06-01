const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const connection = require('./src/script/config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/script/views'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, './src/public')));

const authRouter = require('./src/script/routes/auth');
app.use('/', authRouter);

app.use(express.static(path.join(__dirname, 'src', 'templates')));

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'templates', 'about.html'));
});

app.listen(9000, () => {
    console.log('Server running on http://localhost:9000');
});
