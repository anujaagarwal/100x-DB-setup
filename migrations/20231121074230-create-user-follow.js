"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserFollows", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      followerId: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      followedId: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      followedAt: {
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

    await queryInterface.sequelize.query(`
    ALTER TABLE "UserFollows"
    ADD CONSTRAINT "follower_followed_check"
    CHECK ("followerId" != "followedId");
  `);
    await queryInterface.addConstraint("UserFollows", {
      type: "unique",
      fields: ["followerId", "followedId"],
      name: "unique_followers_constraint",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserFollows");
  },
};
