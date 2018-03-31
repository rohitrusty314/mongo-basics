const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create a schema and a Model

const MarioCharSchema = new Schema({
	name: String,
	weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;