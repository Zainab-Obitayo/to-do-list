const Project = require('../models/project');

let projects = [];
let blogs = [];
let about = {};

exports.getPortfolio = (req, res) => {
  res.json({ about, projects, blogs });
};

// PROJECTS
exports.addProject = (req, res) => {
  const { title, description, technologies, link, video, files } = req.body;
  const newProject = new Project(projects.length + 1, title, description, technologies, link, video, files);
  projects.push(newProject);
  res.status(201).json(newProject);
};

exports.deleteProject = (req, res) => {
  const id = parseInt(req.params.id);
  projects = projects.filter(p => p.id !== id);
  res.status(204).send();
};

// ABOUT
exports.getAbout = (req, res) => {
  res.json(about);
};

exports.setAbout = (req, res) => {
  about = req.body;
  res.status(201).json(about);
};

// BLOGS
exports.getBlogs = (req, res) => {
  res.json(blogs);
};

exports.addBlog = (req, res) => {
  const { title, content, link } = req.body;
  const newBlog = { id: blogs.length + 1, title, content, link };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
};

exports.deleteBlog = (req, res) => {
  const id = parseInt(req.params.id);
  blogs = blogs.filter(b => b.id !== id);
  res.status(204).send();
};