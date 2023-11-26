"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserFollow extends Model {
    static associate(models) {}
  }
  UserFollow.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      followerId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      followedId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      followedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "UserFollows",
      sequelize,
      uniqueKeys: {
        unique_followers: {
          fields: ["followerId", "followedId"],
        },
      },
    },
    {
      sequelize,
      modelName: "UserFollow",
    }
  );
  return UserFollow;
};
