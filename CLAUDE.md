# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Interaction Style

- Always explain the problem and solution options fully before implementing
- Wait for user confirmation before making code changes
- When asked a question, answer it completely before suggesting or making edits

## Project Overview

Personal blog website (portfolio project) that consists of 3 different parts: an API backend that communicates with a database and can be accessed from 2 frontends, a frontend for users to view and comment on my blog, and a frontend for the author (me) to manage the blog's content (write, edit, delete, etc.). This repo represents all three portions of this project.

## Purpose

- Create a backend API for a blog that will be used by 2 different front ends:
  - One for people that want to read and comment on your posts
  - One for me to write, edit, publish and delete posts
- Practice setting up an API only backend and accessing it from the outside
- Practice using RESTful organization on a backend API
- Practice handling authentication with JWTs
- Practice React

## Tech Stack

- **Runtime/Framework:** Node.js, Express 5
- **Database ORM:** Prisma (PostgreSQL)
- **Authentication:** Passport.js (local + JWT strategies), bcryptjs, jsonwebtoken
- **Image Uploads:** Cloudinary, Multer
- **Validation:** express-validator
- **Frontends:** React with Tailwind CSS (mobile-first)
- **Testing:** Jest, Supertest
- **Linting/Formatting:** ESLint, Prettier

## Code Conventions

- Use descriptive variable names (e.g., `hashedPassword`, not `hp`)
- Always use `async/await` for asynchronous operations
- Use ES Modules, as opposed to CommonJS module syntax
- Comment the "why", not the "what"
- **Mobile-first responsive design** - All frontend development uses mobile-first approach with Tailwind CSS breakpoints (default styles for mobile, then `sm:`, `md:`, `lg:`, `xl:` for larger screens)

## Development Commands

All commands run from `backend-api/`:

```
npm run dev                   # start backend with file watching
npm run start                 # start backend (production)
npm run lint                  # run ESLint
npm run format                # run Prettier
npm run test                  # run Jest tests
npm run prisma-migrate        # run Prisma migrations
npm run prisma-studio         # open Prisma Studio GUI
npm run prisma-seed           # seed the database
npm run prisma-reset-and-seed # reset DB and re-seed
```

## Architecture

### Project Structure

```
blog-api/
├── CLAUDE.md
├── backend-api/
│   ├── src/
│   │   ├── index.js           # app setup (Express, middleware, routes)
│   │   ├── server.js          # entry point (starts server)
│   │   ├── config/
│   │   │   └── cloudinary.js
│   │   ├── controllers/       # route handler logic
│   │   ├── middleware/        # custom Express middleware
│   │   ├── models/            # data/business logic layer
│   │   ├── prisma/            # Prisma client setup
│   │   ├── routers/           # Express routers
│   │   ├── tests/             # Jest/Supertest tests
│   │   └── utils/             # shared utility functions
│   ├── eslint.config.mjs
│   ├── prettier.config.mjs
│   ├── requests.rest          # REST client test requests
│   └── package.json
├── frontend-user/             # React app for readers
└── frontend-author/           # React app for author/admin
```

### Key Architectural Patterns

- `index.js` configures the Express app and exports it; `server.js` imports it and starts listening — keeps the app testable with Supertest
- Authentication uses JWTs (access + refresh token pattern) via Passport.js

## Environment Variables

All stored in `backend-api/.env` (never commit this file):

```
DATABASE_URL             # PostgreSQL connection string
PORT                     # server port (default 3000)
CLOUD_NAME               # Cloudinary cloud name
CLOUD_KEY                # Cloudinary API key
CLOUD_SECRET             # Cloudinary API secret
ACCESS_TOKEN_SECRET      # JWT access token signing secret
REFRESH_TOKEN_SECRET     # JWT refresh token signing secret
```
