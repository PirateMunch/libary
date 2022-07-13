let myLibrary = [];
let thisIndex;
const form = document.getElementById('form');
const getForm = document.getElementById("getForm");
const bookShelf = document.getElementById("books"); //called 1 time. better in function maybe? or use to clear screen...
const emptyBook = document.getElementById("emptyBook");
const readInput = ['on', 'off'];

//random number for my books.
function uniqueIndex() {
  return Math.floor(Math.random()*Date.now())
}

//Main Object constructor
class Book {
  constructor(title, author, pages, published, read, dateRead, data, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.published = published;
    this.read = read;
    this.dateRead = dateRead;
    this.data = data;
    this.index = index;
    this.info = function () {
      return [title, author, pages, published, read, dateRead, data, index];
    };
  }
};

//function to build ui display with books
function addBookToLibrary() {
  //find+build newbook from array using unique index number.
  let newBook = myLibrary.find((car) => car.index==thisIndex);
  const {title, author, pages, published, read, dateRead, data, index} = newBook;

  //create list for books/css styling.
  var li = document.createElement('li');
  const classAttribute = document.createAttribute("class");
  classAttribute.value = "book";
  li.setAttributeNode(classAttribute);
  const listData = document.createAttribute("data-book");
  listData.value = newBook.index;
  li.setAttributeNode(listData);
  bookShelf.appendChild(li);
  //display elements as info for user (text list in ui list)
  var info = document.createElement("li");
  const infoAtt = document.createAttribute("info");
  infoAtt.value = "info";
  info.setAttributeNode(infoAtt);
  li.appendChild(info);
  info.innerHTML = `Title \xa0: \xa0\xa0 ${newBook.title}` +"<br>"+ `Author \xa0:\xa0\xa0 ${newBook.author}`  +"<br>"+ `Pages \xa0:\xa0\xa0 ${newBook.pages}`
  +"<br>"+ `Published \xa0:\xa0\xa0  ${newBook.published}` 

  //style div, basicly writing html layout in javascript here
  var box = document.createElement("div");
  const divAtt = document.createAttribute("class");
  divAtt.value = "divBox";
  box.setAttributeNode(divAtt);
  li.appendChild(box);
  
 //Delete button logic and create --
  var button = document.createElement("button");
  const deleteclass = document.createAttribute("class");
  deleteclass.value ="delete";
  const deleteUni = document.createAttribute("id");
  deleteUni.value = newBook.index; 
  button.dataset.delete = "delete";
  button.dataset.index = newBook.index;
  button.setAttributeNode(deleteclass);
  button.setAttributeNode(deleteUni);
  const deleteImg = '<img src="delete1.svg">';
  button.innerHTML = deleteImg;
  box.appendChild(button);

  //EventListener for delete buttons.
  const deleteButtons = document.querySelectorAll('button[data-delete]');
    for(const deleteButton of deleteButtons) {
      deleteButton.addEventListener('click', deleteBook)
    };
    //div spacer to style radio buttons
    var para = document.createElement('p');
    const paraClass = document.createAttribute("class");
    paraClass.value = "paraBox";
    para.setAttributeNode(paraClass);
    para.innerText = "Have you read this book?"
    box.appendChild(para);   

    //group my radio buttons here
    var readDiv = document.createElement('div');
    const readDivId = document.createAttribute("data-radioInput");
    readDivId.value = `${newBook.index}`;
    readDiv.setAttributeNode(readDivId);
    para.appendChild(readDiv);

    console.log(newBook.read)
    //created new feature(bug)! - giving selector same data-index as delete
    //-created the radio inputs inside my delete button-
    //could make more and add a delete confirm!
    //new function to make unique radios to unique book
    const group = document.querySelector(`[data-radioInput="${newBook.index}"]`);
      group.innerHTML = readInput.map((read) => `<div> <input type="radio" name="${newBook.index}" value=${read} id="${newBook.index}">
       <label for="${newBook.index}">${read}</label></div>`).join(' ');

      //event listener for radio buttons.
      const radioButtons = document.querySelectorAll(`[data-radioInput="${newBook.index}"]`);
        for(const radioButton of radioButtons) {
           radioButton.addEventListener('change', showSelected);
        };
        console.log(radioButtons) //gives nodelist
}; //end addBookToLibary. long but works, refactor perhaps.

// logic behind submit book button
const formSubmit = function (event) {
  event.preventDefault();
  title = this.title.value;
  author = this.author.value;
  pages = this.pages.value;
  published = this.published.value;
  read = this.read.value;
  dateRead = this.dateRead.value;
  data = this.data
  index = uniqueIndex();
  userBook = new Book(title, author, pages, published, read, dateRead, data, index ) 
  thisIndex = userBook.index;
  myLibrary.push(userBook);
  toggleForm();
  addBookToLibrary();
};

//(Add New Book) get form button
function toggleForm() {
  const newForm = document.getElementById("hideForm");
  const displaySetting = newForm.style.display;
  if(displaySetting == 'flex') {
    newForm.style.display = 'none';
    getForm.innerHTML = "Add New Book";
    //empty book can be in build libary? Also CSS for style? Not showing in buildlibary
    emptyBook.innerHTML = "";
    emptyBook.style.marginTop = 0;
  }
  else {
    newForm.style.display ='flex';
    getForm.innerHTML = "Cancel Form"
  };
};

//read status for books read on/off function
function showSelected() {
   console.log(this)

//this.child vaalue = on then on
    if(this.checked) {
      if(this.value == "on") {
        userBook.data = "on"
        } else {
          userBook.data = "off"
        }
      };
    
};

function deleteBook () {
  let newBook = myLibrary.find((car) => car.index==thisIndex);
  myLibrary.pop(newBook);
  this.parentElement.parentElement.remove();
  buildLibary();
};

//default display if no books in libary.
function buildLibary() {
  if(myLibrary.length == 0 ) {
  emptyBook.innerHTML = "No books found, add books!"
  console.log(myLibrary.length)
  }
  else {
    console.log(myLibrary.length)
  };
};

window.onLoad = buildLibary();

// upload new book button
form.addEventListener("submit", formSubmit);
//add new book button
getForm.addEventListener('click', toggleForm);

