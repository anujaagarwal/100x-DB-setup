const { User, Post, UserFollow, PostLike } = require("./models");
//create
async function createModels() {
  const user1 = await User.create({
    id: "6",
    name: "veronica",
    username: "veron",
    email: "veron@example.com",
    passwordHash: "#er34", // replace with a hashed password
    bio: "I am strongest.",
    location: "Vatican city",
    website: "https://veron.com",
    profilePicture: "https://veron.com/profile.jpg",
    coverPicture: "https://veron.com/cover.jpg",
    dateOfBirth: new Date("1996-08-23"),
  });

  const user2 = await User.create({
    id: "2",
    name: "Betty",
    username: "betty",
    email: "betty@example.com",
    passwordHash: "#er34", // replace with a hashed password
    bio: "I am beautiful.",
    location: "Riverdal city",
    website: "https://betty.com",
    profilePicture: "https://betty.com/profile.jpg",
    coverPicture: "https://betty.com/cover.jpg",
    dateOfBirth: new Date("1996-09-23"),
  });

  const Post1 = await Post.create({
    id: "1",
    content: "I am strongest.",
    type: "post",
    postedAt: new Date(),
    userId: user1.id,
    isRepost: false,
    createdAt: new Date(),
  });

  const Post2 = await Post.create({
    id: "2",
    content: "I am beautiful.",
    type: "post",
    postedAt: new Date(),
    userId: user2.id,
    isRepost: false,
    createdAt: new Date(),
  });

  const Follow = await UserFollow.create({
    id: "1",
    followerId: user1.id,
    followedId: user2.id,
    followedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const Like = await PostLike.create({
    id: "1",
    userId: user1.id,
    postId: Post1.id,
    likedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

createModels();

//   const post = await Post.create({
//     content: "Onigiri , Three thousand ",
//     posted_at: new Date(),
//     user_id: user.id,

//     type: "post",
//   });

//   const Like = await like.create({
//     user_id: user.id,
//     post_id: post.id,

//     liked_at: new Date(),
//   });
// }

// createUser();

// //read
// async function fetchData() {
//   const user = await User.findAll();
//   console.log(JSON.stringify(user, null, 2));
// }

// fetchData();

// //update
// async function updateData() {
//   await User.update(
//     { username: "Mihawk", display_name: "Dracula" },
//     {
//       where: {
//         id: 2,
//       },
//     }
//   );
// }
// updateData();

// //delete
// async function deleteData() {
//   await like.destroy({
//     where: {
//       post_id: 2,
//     },
//   }),
//     await Post.destroy({
//       where: {
//         id: 2,
//       },
//     });
// }

// deleteData();
