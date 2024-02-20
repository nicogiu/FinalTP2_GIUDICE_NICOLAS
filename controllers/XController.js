import XApi from "../Api/XApi.js";

class XController {
  constructor() {
    this.xapi= new XApi()
  }

  create = async (req, res) => {
    try {
      const { name} = req.body;
      if (!name) throw new Error("Campos vacios");
      const info= await this.xapi.create({name});
      res.status(200).send(info);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
  getAll = async (req, res) => {
    try {
      const info = await this.xapi.getAll();
      res.status(200).send(info);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

}

export default XController;
