const express = require('express');
const cors = require('cors');

const app = express();
const flash = require('connect-flash');
const session = require('express-session');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares 
app.use(cors());
app.use(express.json());
app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
    })
);
app.use(flash());

// Global variables

app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    /* res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null; */
    next();
  });

// Routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));

module.exports = app;
