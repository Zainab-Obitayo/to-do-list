const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Portfolio
router.get('/', portfolioController.getPortfolio);

// Projects
router.post('/project', portfolioController.addProject);
router.delete('/project/:id', portfolioController.deleteProject);

// About
router.get('/about', portfolioController.getAbout);
router.post('/about', portfolioController.setAbout);

// Blogs
router.get('/blog', portfolioController.getBlogs);
router.post('/blog', portfolioController.addBlog);
router.delete('/blog/:id', portfolioController.deleteBlog);

module.exports = router;