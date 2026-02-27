import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// import User from './models/user.js';
// import Post from './models/post.js';
// import Comment from './models/comment.js';

// app initialization
const app = express();

// TODO: Look into caching data to improve performance

// TODO: Before deploying to production, configure to block access from any origin except my frontend
// allows Cross-Origin Resource Sharing on all routes
app.use(cors());

// allows req.body to access submitted HTML form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// app.post('/user', async (req, res) => {
//   try {
//     const user = await User.create({
//       username: 'billybob2',
//       password: 'Password123!',
//     });

//     res.json({
//       user,
//     });
//   } catch (err) {
//     res.json({ err });
//   }
// });

export default app;
