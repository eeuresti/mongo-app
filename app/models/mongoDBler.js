var mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost/test");

var ourBooks = require("./books.json");



var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    genre: String,
    ISBN: Number
});


var Book = mongoose.model('Book', BookSchema);

var book = new Book({title: "Jurassic Park"});
book.author = "Michael Crichton";
book.description = "Uhh... Life... Life finds a way.";
book.genre = 'fiction';
book.ISBN = 9780345538987;
//book.save();


Book.find({title: "Jurassic Park"}, function(err, found){
	var foundTitle = found;
	console.log("Found: \n",foundTitle);
});
//TODO: Add three unique books


//TODO: Find and display three different books using three different methods
// For example, find by title, find by author, and find by ISBN.
