"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(120),
        allowNull: false,
        unique: true,
      },
      emailVerifiedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      passwordHash: {
        type: Sequelize.STRING(512),
        allowNull: false,
      },
      bio: {
        type: Sequelize.STRING(160),
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      website: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      profilePicture: {
        type: Sequelize.STRING(1024),
        allowNull: false,
      },
      coverPicture: {
        type: Sequelize.STRING(1024),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      isPrivate: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
