let myLibrary = [];
let submitArray = [];
let userBook;

const indexNum = myLibrary.length;
const form = document.getElementById('form');
const getForm = document.getElementById("getForm");
const bookShelf = document.getElementById("books");
const emptyBook = document.getElementById("emptyBook")

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

//logic to build the display with new books, adding attributes, unique data-index
function addBookToLibrary() {
  newBook = myLibrary[myLibrary.length -1];
   //create list items with class of book and append
    var li = document.createElement('li');
    const classAttribute = document.createAttribute("class");
    classAttribute.value = "book";
    li.setAttributeNode(classAttribute);
    bookShelf.appendChild(li);
  //display elements as info for user
    var info = document.createElement("li");
    const infoAtt = document.createAttribute("info");
    infoAtt.value = "info";
    info.setAttributeNode(infoAtt);
    li.appendChild(info);
    info.innerHTML = `Title \xa0: \xa0\xa0 ${newBook[0]}` +"<br>"+ `Author \xa0:\xa0\xa0 ${newBook[1]}`  +"<br>"+ `Pages \xa0:\xa0\xa0 ${newBook[2]}`
    +"<br>"+ `Published \xa0:\xa0\xa0  ${newBook[3]}` 
  //style div, basicly writing html layout in javascript here
    var box = document.createElement("div");
    const divAtt = document.createAttribute("class");
    divAtt.value = "divBox";
    box.setAttributeNode(divAtt);
    li.appendChild(box);

    var button = document.createElement("button");
    const deleteclass = document.createAttribute("class");
    deleteclass.value ="delete";
    const deletedata = document.createAttribute("data-index");
    deletedata.value = indexNum;
    button.setAttributeNode(deletedata);
    button.setAttributeNode(deleteclass);
    const deleteImg = '<img src="delete1.svg">';
    button.innerHTML = deleteImg;
    box.appendChild(button)
    //create event listener with the dom element.
    Array.from(document.getElementsByClassName("delete")).forEach(function(element) {
      element.addEventListener('click', deleteBook)
    });
        //read status.  not sure i like 4 extra boxes here, but works
        var readlabel = document.createElement('label');  
        const labelclass = document.createAttribute("class");
        labelclass.value = "label";
        readlabel.setAttributeNode(labelclass);
        readlabel.innerHTML = "Read this book?"
        box.appendChild(readlabel);
    
        var readselect = document.createElement('select');
        const selectclass = document.createAttribute("class");
        selectclass.value = ("select");
        readselect.setAttributeNode(selectclass);
        readlabel.appendChild(readselect);
    
        var readoptionno = document.createElement("option");
        const optionclassno = document.createAttribute("value");
        readoptionno.setAttributeNode(optionclassno);
        readoptionno.innerHTML = "No";
        readselect.appendChild(readoptionno);
    
        var readoptionyes = document.createElement("option");
        const optionclassyes = document.createAttribute("value");
        readoptionyes.setAttributeNode(optionclassyes);
        readoptionyes.innerHTML = "Yes";
        readselect.appendChild(readoptionyes);
};

// logic behind submit book button
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
  addBookToLibrary();
};

//logic behind add new book/get form button
function toggleForm() {
  const newForm = document.getElementById("hideForm");
  const displaySetting = newForm.style.display;
  if(displaySetting == 'flex') {
    newForm.style.display = 'none';
    getForm.innerHTML = "Add New Book";
    emptyBook.innerHTML = "";
    emptyBook.style.marginTop = 0;
  }
  else {
    newForm.style.display ='flex';
    getForm.innerHTML = "Cancel Form"
  }
};

//work below here, above is working as intended for now

function buildLibary() {
  emptyBook.innerHTML = "No books found, add books!"
};
window.onLoad = buildLibary();

//--- test stuff
function deleteBook (e) {
  console.log("Boo")
  console.log(this.value)
};


// upload new book button
form.addEventListener("submit", formSubmit);
//add new book button
getForm.addEventListener('click', toggleForm);
