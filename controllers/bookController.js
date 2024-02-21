import bookApi from "../Api/bookApi.js";
import BookDao from "../DAOs/bookDao.js";

class bookController {
  constructor() {
    this.bookApi= new bookApi()
  }

  create = async (req, res) => {
    try {
      const { code, title, author} = req.body;
      const bookFound = bookApi.getBookByCode(code);

      if(bookFound) throw new Error ("Ya hay un libro con ese codigo!")
      if (!code || !title || !author) throw new Error("Faltan campos obligatorios");
      const status = "disponible";
      
      const info= await this.bookApi.create({code, title, author, status});
      res.status(200).send(info);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  getAll = async (req, res) => {
    try {
      const info = await this.bookApi.getAll();

      const booksWithStatus = info.map((book) =>({
        title: book.title,
        status: book.status
      }))

      res.status(200).send(booksWithStatus);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  removeBook = (req, res) => {
    try {
      const code = req.params.code;
      const removedBook = bookApi.removeBook(code);
  
      if (removedBook) {
        res.json({
          success: true,
          data: removedBook,
          message: "Book removed successfully",
        });
      } else {
        res.status(404).json({
          errorMsg: "Book not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        errorMsg: "Internal Server Error",
      });
    }
  };

  getBookByCode = (req, res) => {
    try {
      const code = req.params.code;
      const book = bookApi.getBookByCode(code);
  
      if (book) {
        res.json({
          success: true,
          data: book,
        });
      } else {
        res.status(404).json({
          errorMsg: "Book not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        errorMsg: "Internal Server Error",
      });
    }
  };
  
  changeStatus = (req,res) => {
    try{
      const code = req.params.code;
      const status = req.body.status;

      if (!["alquilado", "disponible", "no-apto"].includes(status)) {
        return res.status(400).json({
          errorMsg: "El estado proporcionado no es válido. Debe ser 'alquilado', 'disponible' o 'no-apto'."
        });
      }

      const book = bookApi.changeStatus(code, status);

      if (book) {
        res.json({
          success: true,
          data: book,
        });
      } else {
        res.status(404).json({
          errorMsg: "Book not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        errorMsg: "Internal Server Error",
      });
    }
  }

  listByStatus = async (req, res) => {
    try {
      const books = await this.bookApi.getAll();
  
      const availableBooks = books.filter((book) => book.estado === "disponible");
      const rentedBooks = books.filter((book) => book.estado === "alquilado");
      const notSuitableBooks = books.filter((book) => book.estado === "no-apto");
  
      res.status(200).json({
        availableBooks,
        rentedBooks,
        notSuitableBooks
      });
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  };
}

export default bookController;
