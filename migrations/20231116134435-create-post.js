"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable("Posts", {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["post", "repost", "reply"],
        defaultValue: "post",
        allowNull: false,
      },
      reference_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: "Posts",
          key: "id",
        },
      },
      is_repost: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      content: { type: DataTypes.STRING(280), allowNull: true },
      posted_at: { type: DataTypes.DATE, allowNull: true },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      deleted_at: { type: DataTypes.DATE, allowNull: true },
    });
  },

  async down(queryInterface, Sequelize) {},
};
