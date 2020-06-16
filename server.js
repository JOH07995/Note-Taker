const express = require('express');
const routes = require('./public/index');
const api = require('./public/api');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', routes);
app.use('/api/', api);

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));