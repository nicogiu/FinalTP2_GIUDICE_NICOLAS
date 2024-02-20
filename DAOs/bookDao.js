class BookDao {
    constructor() {
      this.books = [];
    }
  
    getAllBooks() {
      return this.books;
    }
  
    getBookByCode(code) {
      return this.books.find((book) => book.code === code);
    }
  
    addBook(book) {
      this.books.push(book);
      return book;
    }
  
    removeBook(code) {
      this.books = this.books.filter((book) => book.code !== code);
    }

    changeStatus(code, newStatus){
      const bookToChange = this.books.find((book) => book.code === code)

      bookToChange.status = newStatus;
      
      return bookToChange;
    }
  }
  
 export default BookDao;
  