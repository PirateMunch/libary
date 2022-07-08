let myLibrary = [];

// constructor for books could be a Class.
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

// test - book data for working on project
const lordOfFlies = new Book("Lord of the Flies", "William Golding", "224", "17 September 1954", "on", "11/12/1982");
const testbook = new Book("test book", "test guy", "1224", "12 September 1954", "off", "01/12/1934");

//need refined after building
function addBookToLibrary() {
  myLibrary.push(lordOfFlies.info())
  myLibrary.push(testbook.info())
  myLibrary.push(userBook.info())
};

const formSubmit = function (event) {
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
  myLibrary.push(userBook.info());
  toggleForm();
  //bug -- stop duplicates here
  buildLibary();
  
};


function buildLibary() {
  myLibrary.forEach(renderlist);
// add for if here to exclude doubles. Or before append?
// for (let i in myLibrary) { 
//   if(i === --i) {
//     continue;
//     } run renderlist.....  

  function renderlist(element, index, arr) {
    //create list items with class of book and append
    var li = document.createElement('li');
    const classAttribute = document.createAttribute("class");
    classAttribute.value = "book";
    li.setAttributeNode(classAttribute);

    bookShelf.appendChild(li);

    //test
    console.log(element[0]);
// make book into nice list - works, maybe bit crude.
    li.innerHTML = `Title \xa0: \xa0\xa0 ${element[0]}` +"<br>"+ `Author \xa0:\xa0\xa0 ${element[1]}`  +"<br>"+ `Pages \xa0:\xa0\xa0 ${element[2]}`
    +"<br>"+ `Published \xa0:\xa0\xa0  ${element[3]}`  +"<br>"+ `Read \xa0:\xa0\xa0 ${element[4]}`  +"<br>"+ `Finished Reading Book \xa0:\xa0\xa0 ${element[5]}`
  }
};

function toggleForm() {
  const newForm = document.getElementById("hideForm");
  const displaySetting = newForm.style.display;
  if(displaySetting == 'grid') {
    newForm.style.display = 'none';
  }
  else {
    newForm.style.display ='grid';
  }
};

//declare globals here
const form = document.getElementById('form');
const getForm = document.getElementById("getForm");
const bookShelf = document.getElementById("books");
let userBook;

// upload new book button
form.addEventListener("submit", formSubmit);

//add new book button
getForm.addEventListener('click', toggleForm);

// test - get display working. need refined 
function showLibary() {
  myLibrary.push(lordOfFlies.info());
  myLibrary.push(testbook.info());
  buildLibary();
};
window.onLoad = showLibary();


//bugs -- Submit book returns all of myLibary array concated up
//would like -- add new book button should disapear when form opens up