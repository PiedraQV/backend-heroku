const logger = require ('../logguer/logguer')

// Index
const getIndex = (req, res) => res.render('form.handlebars')

// Login
const getLogin = (req, res) => {
	logger.info()
	if (req.isAuthenticated()) {
		let { username } = req.user;
		res.render('form.handlebars', { username });
	} else (res.render('login.handlebars'))
	{
        logger.error("⛔ Error al autenticarse")
	};
};

// Signup
const getSignup = (req, res) => res.render('signup.handlebars');

// Process login
const postLogin = (req, res) => {
	const { username } = req.user;
	res.render('form.handlebars', { username });
}

// Process signup
const postSignup = (req, res) => {
	const { username } = req.user;
	res.render('form.handlebars', { username });
}

const getFailLogin = (req, res) => res.render('faillogin.handlebars');
const getFailSignup = (req, res) => res.render('failsignup.handlebars');

// Logout
const getLogout = (req, res) => {
	req.logout(error => { 
		if (error) next(error) 
	});
	res.redirect('/login');
}

const failRoute = (req, res) => res.status(404).render('routing-error');

module.exports = { getIndex, getLogin, getSignup, postLogin, postSignup, getFailLogin, getFailSignup, getLogout, failRoute };