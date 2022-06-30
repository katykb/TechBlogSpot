const Posts = require("../models/Posts");

const postData = [
  {
    post_title: "JavaScript",
    post_body: "what a magical language",
    user_id: 1,
  },

  {
    post_title: "Html",
    post_body: "the hyper language",
    user_id: 2,
  },
  {
    post_title: "CSS",
    post_body: "oh the places you can go with CSS",
    user_id: 4,
  },
];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;
