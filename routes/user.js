const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.post('/toFavorite/:id', auth, (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.favoriteBooks.push(req.body.book)
            user.save()
                .then(() => res.send(`Add to favorite; book-${req.body.book}`))
                .catch(err => res.status(400).send({ error: err }))
        })
        .catch(err => res.status(400).send({ error: err }));
});

module.exports = router;