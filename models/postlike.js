"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostLike extends Model {
    static associate(models) {}
  }
  PostLike.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      postId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "Posts",
          key: "id",
        },
      },
      likedAt: {
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "PostLikes",
      sequelize,
      uniqueKeys: {
        unique_followers: {
          fields: ["userId", "postId"],
        },
      },
    },
    {
      sequelize,
      modelName: "PostLike",
    }
  );
  return PostLike;
};
