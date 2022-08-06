const User = require('../models/users')

exports.isPremium = async(req, res, next) => {
    res.json(req.user.ispremiumuser)
}