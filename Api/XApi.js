import Factory from "../DAOs/Factory.js";
import { MODE } from "../config/config.js";
class xApi {
  constructor() {
    this.factory = Factory.factory(MODE);
  }
  create = async (data) => {
    try {
      // vallidar la palabra
      const info = await this.factory.xDao.createDao(data);
      return info;
    } catch (error) {
      return error;
    }
  };
  getAll = async () => {
    try {
      // vallidar la palabra
      const info= await this.factory.xDao.getAllDao();
      return info;
    } catch (error) {
      return error;
    }
  };
}

export default xApi;
