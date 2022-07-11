let myLibrary = [];
let submitArray = [];
let userBook;

const form = document.getElementById('form');
const getForm = document.getElementById("getForm");
const bookShelf = document.getElementById("books");
const emptyBook = document.getElementById("emptyBook");


const radioButton = document.getElementsByClassName('radioClass');
const deleteButton = document.querySelectorAll('[data-delete]');

let radioSelected;
let indexNum2 = 0;
function uniqueID() {
  return indexNum2++
}

// constructor for books could be a Class.
function Book(title, author, pages, published, read, dateRead, data) {
  this.title = title
  this.author = author
  this.pages = pages
  this.published = published
  this.read = read
  this.dateRead = dateRead
  this.data = data
  this.info = function() {
    return [title, author, pages, published, read, dateRead, data]
  }
};

//logic to build the display with new books, adding attributes, unique data-index
function addBookToLibrary() {
  newBook = submitArray[submitArray.length -1]; //not best way to get newbook. infact is causing issues i think
  indexNum = uniqueID();
   //create list items with class of book and append
    var li = document.createElement('li');
    const classAttribute = document.createAttribute("class");
    const classAttribute1 = document.createAttribute("class");
    classAttribute1.value = "book1";
    classAttribute.value = "book";
    li.setAttributeNode(classAttribute);
    const listData = document.createAttribute("data-index");
    listData.value = indexNum;
    li.setAttributeNode(listData);
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
  
  //Delete button logic
    var button = document.createElement("button");
    const deleteclass = document.createAttribute("class");
    deleteclass.value ="delete";
    const deletedata = document.createAttribute("data-index");
    deletedata.value = indexNum;
    button.dataset.delete = "delete";
    button.setAttributeNode(deletedata);
    button.setAttributeNode(deleteclass);
    const deleteImg = '<img src="delete1.svg">';
    button.innerHTML = deleteImg;

    box.appendChild(button)

    //create event listener with the dom element.
    //using arrow function to access this.parent to delete correct book
    Array.from(document.getElementsByClassName("delete")).forEach(function(element) {
      element.addEventListener('click', function () {
        //remove book from display
        var boss = this.parentNode
        var bigBoss = boss.parentNode
        console.log(element.value)
        bigBoss.remove();
        //remove book from myLibary array 
          //needs fix need delete button caches... for loop better maybe
          buildLibary();
      })
    });

        //read status.  not sure i like 4 extra boxes here, but work       
      var para = document.createElement('p');
      const paraClass = document.createAttribute("class");
      paraClass.value = "paraBox";
      para.setAttributeNode(paraClass);
      para.innerText = "Have you read this book?"
      box.appendChild(para);   
        
        var readYes = document.createElement('input');
        const yesClass = document.createAttribute("class");
        yesClass.value = "radioClass";
        readYes.setAttributeNode(yesClass);
        const yesType = document.createAttribute("type");
        yesType.value = "radio";
        readYes.setAttributeNode(yesType);
        const yesName = document.createAttribute("name");
        yesName.value = "readSelect";
        readYes.setAttributeNode(yesName);
        const yesValue = document.createAttribute("value");
        yesValue.value = "Yes";
        readYes.setAttributeNode(yesValue);
        readYes.dataset.radio = "yes";
        readYes.innerHTML = "yes";
        para.appendChild(readYes);

        var readlabelYes = document.createElement('label');  
        const labelclassYes = document.createAttribute("class");
        labelclassYes.value = "yesClass";
        readlabelYes.setAttributeNode(labelclassYes);
        const labelForYes = document.createAttribute("for");
        labelForYes.value = "readSelect";
        readlabelYes.setAttributeNode(labelForYes);
        readlabelYes.innerHTML = "Yes";
        para.appendChild(readlabelYes);
 
        var readNo = document.createElement('input');
        const noClass = document.createAttribute("class");
        noClass.value = "radioClass";
        readNo.setAttributeNode(noClass);
        const noType = document.createAttribute("type");
        noType.value = "radio";
        readNo.setAttributeNode(noType);
        const noName = document.createAttribute("name");
        noName.value = "readSelect";
        readNo.setAttributeNode(noName);
        const noValue = document.createAttribute("value");
        noValue.value = "no";
        readNo.setAttributeNode(noValue);
        readNo.dataset.radio = "no";
        readNo.innerText = "no";
        para.appendChild(readNo);

        var readlabel = document.createElement('label');  
        const labelclass = document.createAttribute("class");
        labelclass.value = "noClass";
        readlabel.setAttributeNode(labelclass);
        const labelFor = document.createAttribute("for");
        labelFor.value = "readSelect";
        readlabel.setAttributeNode(labelFor);
        readlabel.innerHTML = "No";
        para.appendChild(readlabel);

   //  logic behind targeting the selector icon and changing the book
 Array.from(document.getElementsByClassName("radioClass")).forEach(function(element) {
  element.addEventListener('click', () => {
      element.addEventListener("change", () => {
     if (element.value == "Yes") {
          console.log(element.parentElement.parentElement.parentElement)
             info.innerHTML = `Title \xa0: \xa0\xa0 ${newBook[0]}` + "<br>" + `Author \xa0:\xa0\xa0 ${newBook[1]}` + "<br>" + `Pages \xa0:\xa0\xa0 ${newBook[2]}`
            + "<br>" + `Published \xa0:\xa0\xa0  ${newBook[3]}` + "<br>" + `Date Read \xa0:\xa0\xa0 ${newBook[5]}`;
            element.parentElement.parentElement.parentElement.setAttributeNode(classAttribute1);
        }
        else {
          console.log("duck");
          //no, update display
          info.innerHTML = `Title \xa0: \xa0\xa0 ${newBook[0]}` + "<br>" + `Author \xa0:\xa0\xa0 ${newBook[1]}` + "<br>" + `Pages \xa0:\xa0\xa0 ${newBook[2]}`
            + "<br>" + `Published \xa0:\xa0\xa0  ${newBook[3]}`;
          //need change to this element not all books
          li.setAttributeNode(classAttribute);
        }
    })
  })    
})
}
              
// logic behind submit book button
const formSubmit = function (event) {
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
  console.log(myLibrary)
  console.log(submitArray)
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

//more of a default display function for now. 
function buildLibary() {
  if(myLibrary.length === 0 ) {
  emptyBook.innerHTML = "No books found, add books!"
  console.log(myLibrary.length)
  }
  else {
    console.log(myLibrary.length)
  }
};

window.onLoad = buildLibary();

// upload new book button
form.addEventListener("submit", formSubmit);
//add new book button
getForm.addEventListener('click', toggleForm);
