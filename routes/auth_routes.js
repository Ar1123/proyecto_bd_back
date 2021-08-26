
const express = require('express');
const router = express.Router();

const {login} = require('../controllers/auth_controller');
const { asignaturas } = require('../controllers/teacher_controller');

router.post('/sigin',login)
module.exports = router;
