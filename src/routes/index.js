const router = require('express').Router();
const { version } = require('../../package.json');

router.use('/client', require('./client'));

router.get('/', (req, res) => res.send(`Neoclients API v${version}`));

module.exports = router;