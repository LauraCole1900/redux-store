const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/redux-store_db', {});

module.exports = mongoose.connection;
