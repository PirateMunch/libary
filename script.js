let myLibrary = [];

// constructor for books
function Book(title, author, pages, published, read, dateRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.published = published
  this.read = read
  this.dateRead = dateRead
  this.info = function() {
    return [title, author, pages, published, read, dateRead]
  }
};


// test book
const lordOfFlies = new Book("Lord of the Flies", "William Golding", "224", "17 September 1954", "on", "11/12/1982");
const testbook = new Book("test book", "test guy", "1224", "12 September 1954", "off", "01/12/1934");

function addBookToLibrary() {
  myLibrary.push(userBook.info())
  myLibrary.push(lordOfFlies.info())
  myLibrary.push(testbook.info())
};

const form = document.getElementById('form');

let userBook;

const test = function (event) {
  //this little bugger had me stuck for too long!! im sure it disabled my button before.
  event.preventDefault();
  //declare my values in the function for my eventlistener submit button
  title = this.title.value;
  author = this.author.value;
  pages = this.pages.value;
  published = this.published.value;
  read = this.read.value;
  dateRead = this.dateRead.value;
  
  userBook = new Book(title, author, pages, published, read, dateRead);
  addBookToLibrary();
  
  console.log(myLibrary);
};

form.addEventListener("submit", test);
