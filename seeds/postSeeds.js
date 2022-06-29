const Posts = require("../models/Posts");

const postData = [
  {
    post_title: "JavaScript",
    post_body: "what a magical language",
  },

  {
    post_title: "Html",
    post_body: "the hyper language",
  },
  {
    post_title: "CSS",
    post_body: "oh the places you can go with CSS",
  },
];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;
