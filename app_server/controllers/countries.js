/* GET 'home' page */
const countriesList = function(req, res) {
  res.render('countries-list', {
    title: 'Countries - Select your preferred destination',
    pageHeader: {
      title: 'Countries',
      strapline: 'Select your preferred destination'
    },
    details: [{
      name: 'Japan',
      capital: 'Tokyo',
      population: 127093090,
      religions: ['Shinto', ' Buddhism', ' Christianity'],
      currency: 'Yen'
    }, {
      name: 'USA',
      capital: 'Washington D.C.',
      population: 327464095,
      religions: ['Christianity', ' Judaism', ' Islam'],
      currency: 'Dollar'
    }, {
      name: 'Canada',
      capital: 'Ottawa',
      population: 37052971,
      religions: ['Christianity', ' Non-religious', ' Islam'],
      currency: 'Canadian Dollar'
    }, {
      name: 'Australia',
      capital: 'Canberra',
      population: 24868222,
      religions: ['Christianity', ' Anglican ', ' Islam'],
      currency: 'Australian Dollar'
    }, {
      name: 'China',
      capital: 'Ottawa',
      population: 1416728260,
      religions: ['Non-religious / Chinese folk reliigion', ' Buddhism', ' Christianity'],
      currency: 'Renminbi'
    }]
  });
};
/* GET 'Location info' page */
const countryInfo = function(req, res) {
  res.render('countryInfo', {
    title: 'Country info'
  });
};
/* GET 'Add review' page */
const makeBooking = function(req, res) {
  res.render('bookingForm', {
    title: 'Make Booking'
  });
};
module.exports = {
  countriesList,
  countryInfo,
  makeBooking
};
