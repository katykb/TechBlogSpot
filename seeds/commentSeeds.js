const { Comments } = require("../Models");

const commentData = [
  {
    comment: "totally agree",
    user_id: 1,
    post_id: 1,
  },
  {
    comment: "amazing",
    user_id: 2,
    post_id: 2,
  },
  {
    comment: "not so sure about this",
    user_id: 2,
    post_id: 1,
  }
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
