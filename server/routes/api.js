const express = require('express');
const router = express.Router();
const Post = require('../models/posts');
const mongoose =require("mongoose");


/* GET api listing. */
router.get('/', (req, res) => {
  Post.find({}, function(err, posts) {
    if (err) {
        return res.send('Error!');
    }
    return res.status(200).json(posts)
  });
});

router.post('/', (req,res) => {
  var title = req.body.title;
  var body = req.body.body;
  var category = req.body.category;
  var subjectUrl = req.body.subjectUrl;
  var created_at = req.body.created_at;

//validates title and body to ensure they exist
  req.checkBody('title', 'title is required').notEmpty();
  req.checkBody('body', 'body is required').notEmpty();


  var errors = req.validationErrors();

  if(errors){
    console.log(errors)
    return;
  } else {
    var post = new Post({
      title: title,
      body:body,
      category, category,
      subjectUrl, subjectUrl,
      created_at: created_at
    });

    post.save(err => {
      if(err) {
        res.send(err);
      }
      return res.json({ message: "post saved successfully" });
    });
  }

})


module.exports = router;
