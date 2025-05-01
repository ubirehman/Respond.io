const express = require('express')
const router = express.Router()
const authRoutes = require('./authRoutes')
const notesRoutes = require('./notesRoutes')


// Authentication route
router.use('/auth', authRoutes)


// Notes route
router.use('/notes', notesRoutes)

module.exports = router