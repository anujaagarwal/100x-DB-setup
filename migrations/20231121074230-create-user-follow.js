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
      follower_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      followed_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      followed_at: {
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
    CHECK ("follower_id" != "followed_id");
  `);
    await queryInterface.addConstraint("UserFollows", {
      type: "unique",
      fields: ["follower_id", "followed_id"],
      name: "unique_followers_constraint",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserFollows");
  },
};
