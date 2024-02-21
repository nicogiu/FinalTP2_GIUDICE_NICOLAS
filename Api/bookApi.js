import bookDao from "../DAOs/bookDao.js";

class bookApi {
  constructor() {
    this.bookDao = new bookDao();
  }

  create = async (data) => {
    try {
      const bookFound = this.getBookByCode(data.code)

      if(bookFound) throw new Error ("Ya hay un libro con ese codigo!")
      const info = await this.bookDao.addBook(data);
      
      return info;
    } catch (error) {
      return error;
    }
  };

  getAll = async () => {
    try {
      // vallidar la palabra
      const info= await this.bookDao.getAllBooks();
      return info;
    } catch (error) {
      return error;
    }
  };

  removeBook(code) {
    const bookToRemove = this.getBookByCode(code);
    if (bookToRemove) {
      this.bookDao.removeBook(code);
      return bookToRemove;
    }
    return null;
  }

  getBookByCode(code) {
    return this.bookDao.getBookByCode(code);
  }

  rentBook(code){
    const bookToRent = this.getBookByCode(code);
    if (bookToRent && bookToRent.status === "disponible") {
      this.bookDao.changeRentStatus(code);
      return bookToRent;
    }
    return null;
  }

  changeStatus(code, status){
    const book = this.getBookByCode(code);

    if (book && book.status !== status) {
      this.bookDao.changeStatus(code, status);
      return book;
    }
    return null;
  }
}

export default bookApi;
