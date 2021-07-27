const express = require('express')
const documentRouter = require('./document.js')
const roomsRouter = require('./rooms.js')

const router = express.Router()

router.use('/rooms', roomsRouter)
router.use('/document', documentRouter)

router.all('/', (req, res, next) => {
	// console.log('test')
	return next()
})

module.exports = router
