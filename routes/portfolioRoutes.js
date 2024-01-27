const express = require('express');
const { sendEmailControler } = require('../controllers/portfolioControler');

const router = express.Router()

router.post('/sendEmail', sendEmailControler);


module.exports = router;