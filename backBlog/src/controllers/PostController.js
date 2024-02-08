const { Router } = require("express");
const Post = require("../models/Post");

/**
 * @param {Express.Application} app
 * @param {Router} router
 */

module.exports = function (app, router) {
  router.get('/posts', async (req, res) => {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
      } catch (error) {
        res.status(500).send(error);
      }
  });
    
  router.post('/posts', async (req, res) => {
      const { title, content } = req.body;
      const newPost = new Post({ title, content });
      try {
        await newPost.save();
        res.json(newPost);
      } catch (error) {
        res.status(500).send(error);
      }
  });
};