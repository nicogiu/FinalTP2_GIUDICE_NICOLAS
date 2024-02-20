import {XModel} from "../../Models/index.js";

class XSqlDao {
  constructor() {

  }
  createDao = async (data) => {
    try {
      const x=await XModel.create(data)
      return x;
    } catch (error) {
      return error;
    }
  };
  getAllDao = async () => {
    try {
      const x = await XModel.findAll()
      return x
    } catch (error) {
      return error;
    }
  };
}

export default XSqlDao
