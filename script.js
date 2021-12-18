let myLibrary = [];
const button = document.querySelector("#button");
const newTitle = document.getElementById("title");
const newAuthor = document.getElementById("author");
const newPages = document.getElementById("pages");
const checkBox = document.getElementById("status");
// 


const form = document.querySelector("form");

let container = document.createElement('div')

document.body.appendChild(container)

container.className = "container"




//book constructor 
function Book(title, author, pages, status, index) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
    this.index = index 
  // the constructor...
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status ? `read` : 'not read yet'}`
    }

}


function displayLibrary(){
        const newBook = myLibrary[myLibrary.length-1] //last item in the library returns newBook object 
        const div = document.createElement('div') //create a container for each book
        div.className = 'innerDiv'
        
        const head = document.createElement('h3') //title goes here
        const p = document.createElement('p') //author goes here
        const p_number = document.createElement('p') //number of pages goes here
        const toggle = document.createElement('button') //read/unread toggle button goes here
        toggle.innerHTML = `${newBook.status === true ? `read` : 'unread'}`
        p_number.innerHTML = `${newBook.pages} pages`;
        head.innerHTML = newBook.author 
        p.innerHTML = newBook.title
        div.appendChild(head)
        div.appendChild(p)
        div.appendChild(p_number)
        div.appendChild(toggle)
        container.appendChild(div)
        const remove = document.createElement('button')//remove button
        remove.innerHTML = `remove`
        div.appendChild(remove)
        remove.addEventListener('click',function(){
            div.remove()
            myLibrary = myLibrary.filter(function(el){
              return el.index !== newBook.index 

            })
            console.log(myLibrary)

        })

        toggle.addEventListener('click', function(){
            toggle.innerHTML === 'read' ? toggle.innerHTML = 'unread'
            : toggle.innerHTML = 'read';
        })



       
    
    
}

function removeBook(el){
    el.remove()

}

function addNewBook(){
    form.addEventListener('submit', function(e){
        e.preventDefault()
        let libraryInd = myLibrary.length < 1 ? 0 : myLibrary.length;
        
      
        const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, checkBox.checked, libraryInd)
    

        myLibrary.push(newBook)
        console.dir(newBook.author)
        console.dir(newBook.index)
        console.log(myLibrary) 
        displayLibrary()
        form.reset()
    })
}

addNewBook()


