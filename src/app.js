const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const dbMiddleware = require('./middlewares/db');

const app = express();
const db = require('./database')();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/', dbMiddleware(db), routes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
});

module.exports = app;
