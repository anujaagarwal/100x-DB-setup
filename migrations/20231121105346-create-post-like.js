"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PostLikes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      userId: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
      },
      postId: {
        type: Sequelize.BIGINT,
        references: {
          model: "Posts",
          key: "id",
        },
      },
      likedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("PostLikes", {
      type: "unique",
      fields: ["userId", "postId"],
      name: "unique_likes_constraint",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PostLikes");
  },
};
