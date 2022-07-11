let myLibrary = [];
let userBook;

const form = document.getElementById('form');
const getForm = document.getElementById("getForm");
const bookShelf = document.getElementById("books");
const emptyBook = document.getElementById("emptyBook");

const yesOrNo = ['Yes', 'No'];

//random enough number for my books.
function uniqueIndex() {
  return Math.floor(Math.random()*Date.now())
}

// constructor for books could be a Class.
function Book(title, author, pages, published, read, dateRead, data, index) {
  this.title = title
  this.author = author
  this.pages = pages
  this.published = published
  this.read = read
  this.dateRead = dateRead
  this.data = data
  this.index = index
  this.info = function() {
    return [title, author, pages, published, read, dateRead, data, index]
  }
};

/////no logic left this stage.....  
//// need simplify and take arrays out of some functions to stop cache
//logic to build the display with new books, adding attributes, unique data-index
function addBookToLibrary() {
  newBook = myLibrary[myLibrary.length -1]; //not best way to get newbook. infact is causing issues i think
   //create list items with class of book and append
    var li = document.createElement('li');
    const classAttribute = document.createAttribute("class");
    classAttribute.value = "book";
    li.setAttributeNode(classAttribute);
    const listData = document.createAttribute("data-book");
    listData.value = userBook.index;
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
    const deleteUni = document.createAttribute("id");
    deleteUni.value = userBook.index; 
    button.dataset.delete = "delete";
    button.dataset.index = userBook.index;
    button.setAttributeNode(deleteclass);
    button.setAttributeNode(deleteUni);
    const deleteImg = '<img src="delete1.svg">';
    button.innerHTML = deleteImg;

    box.appendChild(button)

    const deleteButtons = document.querySelectorAll('button[data-delete]');

      for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', () => {
    [...deleteButtons].forEach(btn => console.log(btn.id, myLibrary))
      //     let arrayID = myLibrary.findIndex(item => item.id === userBook.index);
      //     console.log(arrayID)
      })
    };
      // function deleteBook() {
      //   console.log(myLibrary)
      //   console.log(userBook.index)
      //   // this.parentElement.parentElement.remove();

      // }

      //read status ok books radio buttons
      var para = document.createElement('p');
      const paraClass = document.createAttribute("class");
      paraClass.value = "paraBox";
      para.setAttributeNode(paraClass);
      para.innerText = "Have you read this book?"
      box.appendChild(para);   

      var readDiv = document.createElement('div');
      const readDivId = document.createAttribute("id");
      readDivId.value = "group";
      readDiv.setAttributeNode(readDivId);
      para.appendChild(readDiv)

      const group = document.querySelector("#group");
       group.innerHTML = yesOrNo.map((read) => `<div> <input type="radio" name="read" value=${read} id="${read}">
       <label for="${read}">${read}</label></div>`).join(' ');

       const radioButtons = document.querySelectorAll('input[name="read"]');
        for(const radioButton of radioButtons) {
           radioButton.addEventListener('change', showSelected);
        }
    };

    function showSelected(e) {
      console.log(e);
       if(this.checked) {
         if(this.value == "Yes") {
          userBook.data = "on"
          } else {
            userBook.data = "off"
          }
      console.log(userBook.data)
          }
};
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
  data = this.data
  index = uniqueIndex();
  //need to define the array name here?
  userBook = new Book(title, author, pages, published, read, dateRead, data, index,);
  myLibrary.push(userBook.info());
  toggleForm();
  addBookToLibrary();
  console.log(myLibrary)
};

//clear form here im thinking
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
