const express = require('express');
const {
    signup,
    signin,
    signout
} = require('../controllers/auth');
const {
    userSignupValidator
} = require("../validator");
const router = express.Router();
// const validator = require('../validator');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout)
module.exports = router;