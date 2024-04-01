const express = require('express')
const {registerUser, loginUser}= require('../controllers/users')
router=express.Router()

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/avatar')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })

  const upload = multer({ storage: storage })

//router for register
router.post('/register', upload.single('avatar'), registerUser)

//router for login
router.post('/login', loginUser)

module.exports= router