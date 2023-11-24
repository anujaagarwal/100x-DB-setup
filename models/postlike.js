"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PostLike.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      post_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "Posts",
          key: "id",
        },
      },
      liked_at: {
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
          fields: ["user_id", "post_id"],
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
