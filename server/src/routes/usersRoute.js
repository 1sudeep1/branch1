const express = require('express')
const {registerUser}= require('../controllers/users')
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

router.post('/register', upload.single('avatar'), registerUser)
module.exports= router