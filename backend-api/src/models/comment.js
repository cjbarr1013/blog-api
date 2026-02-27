import prisma from '../utils/prisma.js';

const Comment = {
  // create
  async create(commentData) {
    return prisma.comment.create({
      data: commentData,
    });
  },

  // find
  async findById(id) {
    return prisma.comment.findUnique({
      where: { id },
    });
  },

  async findByIdWithContent(id) {
    return prisma.comment.findUnique({
      where: { id },
      include: {
        post: true,
        creator: true,
      },
    });
  },

  // update
  async update(commentId, commentData) {
    return prisma.comment.update({
      where: { id: commentId },
      data: commentData,
    });
  },

  // delete
  async delete(commentId) {
    return prisma.comment.delete({
      where: { id: commentId },
    });
  },
};

export default Comment;
