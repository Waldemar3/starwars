const express = require('express');

const app = express();

app.use(express.static('public'));

app.use(require('./routes/index.router.js')(app));

app.listen(3000);
