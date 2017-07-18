const express = require('express')
,	router = express.Router()
,	passport = require('passport')
// ,	jwt = require('jsonwebtoken')
,	config = require('../config/database')
,	Character = require('../models/character');

router.post('/create', (req, res, next) => {
	let newCharacter = new Character({
		owner: req.body.owner,
		game: req.body.game,
		characterConcept: req.body.characterConcept,
		name: req.body.name,
		stock: req.body.stock,
		beliefs: req.body.beliefs,
		instincts: req.body.insticts,
		lifepaths: req.body.lifepaths,
		traits: req.body.traits,
		updated: new Date
	});

	Character.addCharacter(newCharacter, (err, character) => {
		if(err){
			res.json({success: false, msg:'Failed to create character'})
		} else {
			res.json({success: true, msg:'Character created'})
		}
	})
});

router.post('/character', (req, res, next) => {
	const name = req.body.name;


	Character.getCharacterByName(name, (err, character) => {
		if(err) throw err;
		if(!character){
			return res.json({success: false, msg: 'Character not found'})
		} else {
			res.json({success: true, character: character})
		}
	})
})

router.post('/:owner', (req, res, next) => {
	const owner = req.params.owner;


	Character.getCharacterByOwner(owner, (err, characters) => {
		if(err) throw err;
		if(!characters){
			return res.json({success: false, msg: 'Characters not found'})
		} else {
			res.json({success: true, characters: characters})
		}

	})
})



module.exports = router;