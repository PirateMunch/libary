//get user info
let userTitle = document.getElementById("title")
let userAuthor = document.getElementById("author")
let userPages = document.getElementById("pages")
let userPublished = document.getElementById("published")
let userRead = document.getElementById("read")
let userStars = document.getElementById("stars")
let userDateRead = document.getElementById("dateRead")

let myLibrary = [];

// constructor for books
function Book(title, author, pages, published, read, stars, dateRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.published = published
  this.read = read
  this.stars = stars
  this.dateRead = dateRead
  this.info = function() {
    return [title, author, pages, published, read, stars, dateRead]
  }
}
// test book
const lordOfFlies = new Book("Lord of the Flies", "William Golding", "224", "17 September 1954", true, 3, "11/12/1982")

// make user info = newbook....
 const userBook = new Book(userTitle, userAuthor, userPages, userPublished, userRead, userStars, userDateRead)

// change push info to user.info....
function addBookToLibrary() {
  myLibrary.push(userBook.info())
  // myLibrary.push(lordOfFlies.info())
  console.log(myLibrary)
}

/* function activated by HTML button */
function createBook() {
  const userBook = new Book(userTitle, userAuthor, userPages, userPublished, userRead, userStars, userDateRead)
  addBookToLibrary()
}
// submit.addEventListener("click", addBookToLibrary())