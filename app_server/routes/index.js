var express = require('express');
var router = express.Router();

const ctrlLogin = require('../controllers/login');
const ctrlCountries = require('../controllers/countries');
const ctrlAbout = require('../controllers/about');

/* Login Pages */
router.get('/', ctrlLogin.login);
router.get('/register', ctrlLogin.register);

/* Countries pages */
router.get('/countries-list', ctrlCountries.countriesList);
router.get('/countries-list/info', ctrlCountries.countryInfo);
router.get('/countries-list/info/booking', ctrlCountries.makeBooking);

/* About Us page */
router.get('/about', ctrlAbout.about);

module.exports = router;
