//importing user model
const User = require('../models/user')

//importing bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

//controller function for register
const registerUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            res.send({ msg: 'user already exist' })
        } else {
            const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
            req.body.password = hashPassword;
            if(req.file){
                req.body.avatar=req.file.filename;
              }
            await User.create(req.body)
            res.send({ msg: 'user registered successfully' })
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = { registerUser }
