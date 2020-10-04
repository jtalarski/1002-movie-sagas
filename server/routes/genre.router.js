const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log('/GET');
  const queryText = 'SELECT * FROM genres;';
  pool.query(queryText)
  .then((result) => { res.send(result.rows); })
  .catch((err) => {
  console.error('ERROR IN GET /geners');
  res.sendStatus(500);
  })
  });

module.exports = router;