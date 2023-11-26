"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {}
  }
  Post.init(
    {
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
          model: Post,
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
      content: {
        type: DataTypes.TEXT,
        allowNull: true, // Allow null, but with conditional validation
        validate: {
          notNullIfOriginalPost(value) {
            if (!this.isRepost && !value) {
              throw new Error(
                "Content is required for original posts or reply post"
              );
            }
          },
        },
      },
      posted_at: { type: DataTypes.DATE, allowNull: true },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      deleted_at: { type: DataTypes.DATE, allowNull: true },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
