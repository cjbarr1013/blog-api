import 'dotenv/config';
import express from 'express';
import cors from 'cors';

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
app.get('/', (req, res) => {
  res.json({
    message: 'HELLO!',
  });
});

export default app;
