const express = require('express')
const router = express.Router()
const authRoutes = require('./authRoutes')

// Authentication route
router.use('/auth', authRoutes)

module.exports = router