const express = require('express');
const router = express.Router();
const blogCtroler = require('../controllers/blogs')

router.post('/posting', blogCtroler.createBlog);

module.exports = router