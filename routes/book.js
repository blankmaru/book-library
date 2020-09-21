const router = require('express').Router();
const Book = require('../models/Book');
const auth = require('../middleware/auth');

// @route GET all BOOKs
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.send(books))
        .catch(err => res.status(400).send({ error: err }));
});

// @route CREATE BOOK
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

// @route 
router.post('/bookInfo/:id', auth, (req, res) => {
    Book.findById(req.params.id).then(book => {
        res.send(book);
    }).catch(err => res.status(400).send({ error: err }));
});

// @route DELETE BOOK
router.delete('/:id', auth, (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => res.send('Book deleted'))
        .catch(err => res.status(400).send({ error: err }));
});

// @route UPDATE BOOK
router.post('/update/:id', auth, (req, res) => {
    Book.findById(req.params.id).then(book => {
        book.title = req.body.title;
        book.desc = req.body.desc;

        book.save()
            .then(() => res.send('Updated successfully'))
            .catch(err => res.status(400).send({ error: err }));
    });
});

module.exports = router;