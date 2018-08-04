const express = require('express');
const db = require('../db/knex');
const router = express.Router();




router.get('/', (req, res) => {
  db.raw('SELECT id, email FROM users')
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
  userId = req.params.id;
  db.raw('SELECT id, email FROM users WHERE id = ?', [userId])
    .then(user => {
      if (!user || !user.rowCount) {
        res.status(400).send('User not found');
      }
      res.json(user.rows)
    })
    .catch(err => console.log(err));
});

router.post('/login', (req, res) => {
  const body = req.body;
  db.raw(`SELECT email, password FROM users WHERE email = ?`, [body.email])
    .then(user => {
      if (!user || !user.rowCount) {
        res.status(404).json({ "message": 'User not found' });
      }
      return user
    })
    .then(user => {
      if (user.rows[0].password !== body.password) {
        return res.status(200).json({ "message": "Incorrect Password" })
      }
      return user
    })
    .then(user => {
      res.json(user.rows[0]);
    })
    .catch(err => console.log(err));
})

router.post('/register', (req, res)=>{
  const body = req.body;
  return db.raw(`SELECT email FROM users WHERE email = ?`, [body.email])
    .then(user=>{
      if (!user || !user.rowCount) {
        return db.raw(`INSERT INTO users (email, password) VALUES (?, ?) RETURNING *`, [body.email, body.password])
      } else {
        return res.status(400).json({"message": "User Already Exists"})
      }
    })
    .then(user => {
      return res.json(user.rows);
    })
    .catch(err=>console.log(err));
})

module.exports = router;
