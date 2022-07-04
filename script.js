//get user info
const userTitle = document.getElementById("title")
const userAuthor = document.getElementById("author")
const userPages = document.getElementById("pages")
const userPublished = document.getElementById("published")
const userRead = document.getElementById("read")
const userDateRead = document.getElementById("dateRead")


window.onload = function() {
  userTitle.addEventListener("form", function() {
  console.log(userTitle.value);
})
}

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
}


// test book
const lordOfFlies = new Book("Lord of the Flies", "William Golding", "224", "17 September 1954", true, "11/12/1982")
const testbook = new Book("test book", "test guy", "1224", "12 September 1954", false, "01/12/1934")
// const userBook = new Book(userTitle, userAuthor, userPages, userPublished, userRead, userStars, userDateRead)
  

// change push info to user.info..??
function addBookToLibrary() {
  // myLibrary.push(userBook.info())
  myLibrary.push(lordOfFlies.info())
  myLibrary.push(testbook.info())
  // console.log(myLibrary)
}

function testFunc() {
  console.log(myLibrary)
  console.log("help")
  console.log(userTitle.value)
}

// add new book function on button
const addBtn = document.querySelector("#addNewBook")
addBtn.addEventListener('click', testFunc())
 
