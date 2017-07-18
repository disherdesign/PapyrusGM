const mongoose = require('mongoose')
// , bcrypt = require('bcryptjs')
, config = require('../config/database');


const BeliefSchema = mongoose.Schema({
		belief1: {
			type: String,
			required: true
		},
		belief2: {
			type: String,
			required: true
		},
		belief3: {
			type: String,
			required: true
		}
});

const InstinctSchema = mongoose.Schema({
		instinct1: {
			type: String,
			required: true
		},
		instinct2: {
			type: String,
			required: true
		},
		instinct3: {
			type: String,
			required: true
		}
});

const TraitSchema = mongoose.Schema({
		traitName: {
			type: String,
			required: true
		},
		type: {
			type: String,
		},
		type: {
			description: String,
		}
})

const LifepathSchema = mongoose.Schema({
		lifepath: {
			type: String,
			required: true
		},
		race: {
			type: String,
		},
		setting: {
			type: String,
		},
		type: {
			description: String,
		}
})


// User Schema
const CharacterSchema = mongoose.Schema({
	owner: {
		type: String,
		required: true
	},
	game: {
		type:String,
		required: true
	},
	characterConcept: {
		type: String
	},	
	name: {
		type: String,
		required: true
	},
	stock: {
		type: String,
		required: true
	},
	beliefs: BeliefSchema,
	instincts: InstinctSchema,
	lifepaths: [LifepathSchema],
	traits: [TraitSchema],
	updated: { type: Date, default: Date.now }
});


const Character = module.exports = mongoose.model('Character', CharacterSchema);

// module.exports.getCharacterById = function(id, callback){
// 	User.findById(id, callback);
// }

// module.exports.getCharacterByCharacterName = function(name, callback){
// 	const query = {name: name}
// 	User.findOne(query, callback);
// }

module.exports.getAll = function (req, res, next) {
		Character.find()
	}

module.exports.getCharacterByName = function(name, callback){
	const query = {name: name}
	Character.findOne(query, callback);
}

module.exports.getCharacterByOwner = function(owner, callback){
	const query = {owner: owner}
	Character.find(query, callback);
}
module.exports.addCharacter = function(newCharacter, callback){
			newCharacter.save(callback);
}



