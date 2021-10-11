const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/merndatabase';

mongoose.connect(URI, {
    /*useNewUrlParser: true
     useCreateIndex: true */
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
