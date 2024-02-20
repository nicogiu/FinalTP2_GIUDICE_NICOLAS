class xMemoryDao {
  constructor() {
    this.x = ["kuka"];
  }
  createDao = async (data) => {
    try {
      await this.x.push(data.name);
      return await data;
    } catch (error) {
      return error;
    }
  };
  getAllDao = async () => {
    try {
      const data = await this.x.join(" ");
      return data;
    } catch (error) {
      return error;
    }
  };

}

export default xMemoryDao;
