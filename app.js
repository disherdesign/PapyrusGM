const express = require('express')
,	path = require('path')
,	bodyParser = require('body-parser')
,	cors = require('cors')
,	passport = require('passport')
,	mongoose = require('mongoose')
,	config = require('./config/database')

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('Connected to database '+config.database)
});

mongoose.connection.on('error', (err) => {
	console.log('Database error: '+err)
});

const app = express();

const users = require('./routes/users');
const characters = require('./routes/characters');

app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

//body parser middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/characters', characters);

const port = 3001;

app.get('/', (req, res) => {
	res.send('invalid endpoint')
});

// Send every un-defined route to index.html 
app.get('*', (req) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
	console.log('Server started on port '+port)
});