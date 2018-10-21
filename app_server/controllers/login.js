/*GET home page */
const login = function(req, res) {
  res.render('index', { title: 'Login' });
}

const register = function(req, res) {
  res.render('index', { title: 'Register' });
}

module.exports = {
  login,
  register
};
