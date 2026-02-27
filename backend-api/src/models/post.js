import prisma from '../utils/prisma.js';

const Post = {
  // create
  async create(postData) {
    return prisma.post.create({
      data: postData,
    });
  },

  // find
  async findById(id) {
    return prisma.post.findUnique({
      where: { id },
    });
  },

  async findByIdWithContent(id) {
    return prisma.post.findUnique({
      where: { id },
      include: {
        creator: true,
        comments: true,
      },
    });
  },

  // update
  async update(postId, postData) {
    return prisma.post.update({
      where: { id: postId },
      data: postData,
    });
  },

  // delete
  async delete(postId) {
    return prisma.post.delete({
      where: { id: postId },
    });
  },
};

export default Post;
