const express = require('express');
const router = express.Router();
const Post = require('../models/posts');
const mongoose =require("mongoose");
const _ = require('underscore');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;


/* GET api listing. */
router.get('/', (req, res) => {
  Post.find({}, function(err, posts) {
    if (err) {
        return res.send('Error!');
    }
    //underscore function to sortby time stamp
    var sortedPosts = _.sortBy(posts, function(o) {return -o.created_at; })
    return res.status(200).json(sortedPosts)
  });
});

router.post('/', (req,res) => {
  var title = req.body.title;
  var body = req.body.body;
  var category = req.body.category;
  var subjectUrl = req.body.subjectUrl;
  var created_at = new Date().getTime()

  if(!subjectUrl){
    subjectUrl = "none"
  }

  //validates title and body to ensure they exist

  req.checkBody('title', 'title is required').notEmpty();
  req.checkBody('body', 'body is required').notEmpty();
  req.checkBody('category', 'categgory is required').notEmpty();
  // console.log(req.checkBody('category', 'category is required').notEmpty())

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
        return
      }
      return res.json({ message: "post saved successfully" });
    });
  }
});

router.delete('/:id', (req, res) => {
  Post.findById(req.params.id, function (err, doc){
    if(err) {
      return res.status(500).json({
        title: "error occured",
        error: err
      });
    }
    if(!doc){
      return res.status(500).json({
        title: "No post found",
        error: {message: 'Post not found'}
      });
    }
    doc.remove(function(err, result){
      if(err){
        return res.status(500).json({
          title:'An error occured',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted Message',
        obj: result
      })
    })
  })
})


module.exports = router;
