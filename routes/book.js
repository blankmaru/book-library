const router = require('express').Router();
const Book = require('../models/Book');
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.send(books))
        .catch(err => res.status(400).send({ error: err }));
});

router.post('/add', auth, (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        desc: req.body.desc,
        author: req.body.author,
        postedBy: req.body.postedBy
    });

    newBook.save()
        .then(() => res.send('Book created'))
        .catch(err => res.status(400).send({ error: err }));
});

module.exports = router;