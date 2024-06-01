const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('../config/db');

const router = express.Router();
const saltRounds = 10;

// Display login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        connection.query('SELECT * FROM account WHERE username = ?', [username], (err, results) => {
            if (err) {
                console.error('Database query error:', err);
                return res.send('An error occurred');
            }
            if (results.length > 0) {
                const user = results[0];
                console.log('User found:', user);
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.error('Bcrypt compare error:', err);
                        return res.send('An error occurred');
                    }
                    if (isMatch) {
                        req.session.loggedin = true;
                        req.session.username = username;
                        res.redirect('/beranda'); // Redirect to dashboard after successful login
                    } else {
                        console.log('Password mismatch');
                        res.send('Incorrect username or password');
                    }
                });
            } else {
                console.log('No user found with that username');
                res.send('Incorrect username or password');
            }
        });
    } else {
        res.send('Please enter username and password');
    }
});

// Display registration page
router.get('/register', (req, res) => {
    res.render('register');
});

// Handle registration
router.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    if (username && password && email) {
        bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
            if (err) {
                console.error('Bcrypt hash error:', err);
                return res.send('An error occurred');
            }
            console.log('Hashed password:', hashedPassword);
            connection.query('INSERT INTO account (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, results) => {
                if (err) {
                    console.error('Database insert error:', err);
                    return res.send('An error occurred');
                }
                res.redirect('/login');
            });
        });
    } else {
        res.send('Please enter all fields');
    }
});

// Display dashboard
router.get('/beranda', (req, res) => {
    if (req.session.loggedin) {
        res.render('beranda', {
            username: req.session.username
        });
    } else {
        res.redirect('/login');
    }
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;
