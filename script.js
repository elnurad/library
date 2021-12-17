let myLibrary = [];
const button = document.querySelector("#button");
const newTitle = document.getElementById("title");
const newAuthor = document.getElementById("author");
const newPages = document.getElementById("pages");
const checkBox = document.getElementById("status");


const form = document.querySelector("form");

//book constructor 
function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
  // the constructor...
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status ? `read` : 'not read yet'}`
    }

}

function addNewBook(){
    form.addEventListener('submit', function(e){
        e.preventDefault()
      
       const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, checkBox.checked)
        myLibrary.push(newBook)
        console.log(myLibrary) 
        form.reset()
    })
}
addNewBook()

function displayLibrary(){
    //do something
    
}


// console.log(myLibrary)
// function addBookToLibrary() {
//   // create a new object and add it to an array

//   const newTitle = prompt("book title")
//   const newAuthor = prompt("author's name")
//   const newPages = prompt("how many pages?")
//   const state = prompt("have you read it yet? Please answer yes or no")
//   const newState = state === 'yes' ? true : false;
//   const newBook = new Book(newTitle, newAuthor, newPages, newState)
//   console.log(newBook)
//   myLibrary.push(newBook)

// }

// addBookToLibrary()
// console.log(myLibrary)
