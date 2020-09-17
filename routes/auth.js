const router = require('express').Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        user
        .save()
        .then((savedUser) => res.send(savedUser))
        .catch((err) => res.status(400).send({error: err}));
    } catch (err) {
        res.status(400).send(err);
    };
});

module.exports = router;