const mongoose = require('mongoose')

//reference: https://www.youtube.com/watch?v=oT2HOw3fWp4&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=3

// Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function() {
	console.log('Connection has been made, now make fireworks');
}).on('error', function(error) {
	console.log('connection error');
});
