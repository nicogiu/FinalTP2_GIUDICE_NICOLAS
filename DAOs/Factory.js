import xMemoryDao from "./Memory/xMemoryDao.js"
import XSqlDao from "./Sql/XSqlDao.js";

class Factory {
  constructor() {}

  static factory = (MODE) => {
    if (MODE === "memory") {
      return {
        xDao: new xMemoryDao(),
      };
    }
    if (MODE === "sql") {
      return {
        xDao: new XSqlDao(),
      };
    }
  };
}

export default Factory;
