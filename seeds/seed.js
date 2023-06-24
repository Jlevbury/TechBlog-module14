const bcrypt = require('bcrypt');
const User = require('../models/user');
//const Post = require('./models/Post');

const seedData = async () => {
  try {
    // Create dummy users
    const hashedPassword = await bcrypt.hash('password123', 10);

    const user1 = await User.create({
      username: 'user1',
      email: 'user1@example.com',
      password: hashedPassword,
    });

    const user2 = await User.create({
      username: 'user2',
      email: 'user2@example.com',
      password: hashedPassword,
    });

    // Create dummy posts
    await Post.create({
      title: 'Post 1',
      content: 'This is the content of Post 1',
      UserId: user1.id,
    });

    await Post.create({
      title: 'Post 2',
      content: 'This is the content of Post 2',
      UserId: user2.id,
    });

    console.log('Seed data created successfully!');
  } catch (error) {
    console.error('Error creating seed data:', error);
  }
};

seedData();
