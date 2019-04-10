const express = require('express');
const {
    getPosts,
    createPost,
    postsByUser
} = require('../controllers/post');
const {
    requireSignin
} = require("../controllers/auth");
const {
    userById
} = require("../controllers/user");
const router = express.Router();
const {
    createPostValidator
} = require('../validator');

router.get('/', getPosts);
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);
router.get('/posts/by/:userId', requireSignin, postsByUser);
//any route containing userId, our app will first execute userById()
router.param("userId", userById);

module.exports = router;