import prisma from '../utils/prisma.js';
import bcrypt from 'bcryptjs';

const User = {
  // create
  async create(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.username = userData.username.toLowerCase();
    return prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });
  },

  // find
  async findByUsername(username) {
    return prisma.user.findUnique({
      where: { username: username.toLowerCase() },
    });
  },

  async findById(id) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async findByIdWithContent(id) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        posts: true,
        comments: true,
      },
    });
  },

  // update
  async update(id, userData) {
    return prisma.user.update({
      where: { id },
      data: userData,
    });
  },

  // delete
  async delete(id) {
    return prisma.user.delete({
      where: { id },
    });
  },
};

export default User;
