function register(req, res, next) {
  if(!req.body.email) {
    return res.json(400).json({message: 'email is missing'});
  }
  if(!req.body.password) {
    return res.json(400).json({message: 'password is missing'});
  }
  res.json({token: 'xxxxxx'});
}

module.exports = {
  register
};