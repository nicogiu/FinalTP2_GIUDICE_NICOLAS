import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class XModel extends Model {}

XModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "X",
  }
);

export default XModel;
