let myLibrary = [];
let submitArray = [];

// constructor for books could be a Class.
function Book(title, author, pages, published, read, dateRead, data) {
  this.title = title
  this.author = author
  this.pages = pages
  this.published = published
  this.read = read
  this.data = data
  this.info = function() {
    return [title, author, pages, published, read, dateRead, data]
  }
};

// test - book data for working on project
const lordOfFlies = new Book("Lord of the Flies", "William Golding", "224", "17 September 1954", "on", "11/12/1982", 0);
const testbook = new Book("test book", "test guy", "1224", "12 September 1954", "off", "01/12/1934", 1);

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
  submitArray.push(userBook.info());
  toggleForm();
  addNewBook();
};

function addNewBook() {
  newBook = myLibrary[myLibrary.length -1];
  indexNum = myLibrary.length;
   //create list items with class of book and append
    var li = document.createElement('li');
    const classAttribute = document.createAttribute("class");
    classAttribute.value = "book";
    li.setAttributeNode(classAttribute);
    bookShelf.appendChild(li);

    var info = document.createElement("li");
    const infoAtt = document.createAttribute("info");
    infoAtt.value = "info";
    info.setAttributeNode(infoAtt);
    li.appendChild(info);
    info.innerHTML = `Title \xa0: \xa0\xa0 ${newBook[0]}` +"<br>"+ `Author \xa0:\xa0\xa0 ${newBook[1]}`  +"<br>"+ `Pages \xa0:\xa0\xa0 ${newBook[2]}`
    +"<br>"+ `Published \xa0:\xa0\xa0  ${newBook[3]}` 

    var box = document.createElement("div");
    const divAtt = document.createAttribute("class");
    divAtt.value = "divBox";
    box.setAttributeNode(divAtt);
    li.appendChild(box);

    var button = document.createElement("button");
    const deleteclass = document.createAttribute("class");
    deleteclass.value ="delete";
    button.setAttributeNode(deleteclass);
    button.innerHTML = "Delete Book"
  
    box.appendChild(button)

    var readstat = document.createElement('radio');
    const readAtt = document.createAttribute("inputs");
    readAtt.value = "input";
    readstat.setAttributeNode(readAtt);
    readstat.innerHTML = "SSSSSSSSSsssssssss"

    box.appendChild(readstat)
// // make book into nice list - works, maybe bit crude.
//     li.innerHTML = `Title \xa0: \xa0\xa0 ${newBook[0]}` +"<br>"+ `Author \xa0:\xa0\xa0 ${newBook[1]}`  +"<br>"+ `Pages \xa0:\xa0\xa0 ${newBook[2]}`
//     +"<br>"+ `Published \xa0:\xa0\xa0  ${newBook[3]}`  +"<br>"+ `Read \xa0:\xa0\xa0 ${newBook[4]}`  +"<br>"+ `Finished Reading Book \xa0:\xa0\xa0 ${newBook[5]}`
//     // +"<br>"+ `<button type="button" data-index='${indexNum}' class='delete'>Delete Book</button>`
  
   }

function buildLibary() {
  myLibrary.forEach(renderlist);

  function renderlist(element, index, arr) {
    //create list items with class of book and append
    
    var li = document.createElement('li');
    const classAttribute = document.createAttribute("class");
    classAttribute.value = "book";
    li.setAttributeNode(classAttribute);
    bookShelf.appendChild(li);

    var info = document.createElement("li");
    const infoAtt = document.createAttribute("info");
    infoAtt.value = "info";
    info.setAttributeNode(infoAtt);
    li.appendChild(info);
    info.innerHTML = `Title \xa0: \xa0\xa0 ${element[0]}` +"<br>"+ `Author \xa0:\xa0\xa0 ${element[1]}`  +"<br>"+ `Pages \xa0:\xa0\xa0 ${element[2]}`
    +"<br>"+ `Published \xa0:\xa0\xa0  ${element[3]}` 

    var box = document.createElement("div");
    const divAtt = document.createAttribute("class");
    divAtt.value = "divBox";
    box.setAttributeNode(divAtt);
    li.appendChild(box);

    var button = document.createElement("button");
    const deleteclass = document.createAttribute("class");
    deleteclass.value ="delete";
    button.setAttributeNode(deleteclass);
    button.innerHTML = "Delete Book"
    box.appendChild(button)

    var readstat = document.createElement('radio');
    const readAtt = document.createAttribute("inputs");
    readAtt.value = "input";
    readstat.setAttributeNode(readAtt);
    readstat.innerHTML = "SSSSSSSSSsssssssss"
    
    box.appendChild(readstat)
  }

};

function toggleForm() {
  const newForm = document.getElementById("hideForm");
  const displaySetting = newForm.style.display;
  if(displaySetting == 'flex') {
    newForm.style.display = 'none';
    getForm.innerHTML = "Add New Book"
  }
  else {
    newForm.style.display ='flex';
    getForm.innerHTML = "Cancel Form"
  }
};

//declare globals here
const form = document.getElementById('form');
const getForm = document.getElementById("getForm");
const bookShelf = document.getElementById("books");

function myHandler () {
  console.log("Boo")
};

Array.from(document.getElementsByClassName("delete")).forEach(function(element) {
  element.addEventListener('click', myHandler)
});

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


//would like -- add new book button should disapear when form opens up