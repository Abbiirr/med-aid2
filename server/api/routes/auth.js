const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/Auth/AuthController')

router.post('/register', AuthController.Register)
router.post('/login', AuthController.Login)
router.post('/reset', AuthController.Reset)
router.get('/logout', AuthController.Logout)
//router.get('/:id/verify/:token/', AuthController.verifyToken)

module.exports = router