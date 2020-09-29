const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        minlength: 10
    },
    author: {
        type: String,
        required: true
    },
    postedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    category: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;