const express = require('express');
const path = require('path');
const expreact = require('express-handlebars');
/* const cors = require('cors'); */

const app = express();
/* const flash = require('connect-flash');
const session = require('express-session'); */

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));


app.engine(
  ".html",
  expreact({
    defaultLayout: "index",
    /* layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"), */
    extname: ".html",
  })
);
app.set("view engine", ".html");




console.log(path.join(app.get('views'), '../../../frontend/public'))
console.log(path.join(__dirname, '../../frontend/public')) 
// Middlewares 
app.use(express.urlencoded({extended: false}));
/* app.use(cors());
app.use(express.json());
app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
    })
);
app.use(flash()); */

// Global variables

/* app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null; 
    next();
  }); */

// Routes
app.get('/', (req, res) => {
  res.render('index');
})
//app.use('/api/notes', require('./routes/notes'));
//app.use('/api/users', require('./routes/users'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
