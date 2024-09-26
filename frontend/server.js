//server.js

const express = require('express')

var app = express();

app.use(express.static('build'))

app.listen(3000, () => {
    console.log('Fileserver running on 3000');
});
