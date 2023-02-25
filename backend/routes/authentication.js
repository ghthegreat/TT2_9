const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

router.post('/register',authcontroller.register)
router.post('/login',authcontroller.login)
router.get('/logout',authcontroller.logout)
module.exports = router