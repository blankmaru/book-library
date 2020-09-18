const router = require('express').Router();
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
    res.send({
        books: {
            book: {
                title: 'Book',
                desc: 'best book'
            }
        }
    })
})

module.exports = router;