require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://iillynod33:IaZ3LGP7ZV0Ypv2P@csmdb.qnbxlht.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;

