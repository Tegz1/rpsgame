let library = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    read === "true" ? this.read = "Read" : this.read = "Not Read"
   
    this.info = function(){
        
        return `${title} by ${author}, ${pages} pages, read is ${read}`;
    }
}

//Is there a prefered time to create methods directly
//in the constructor and when to use the Object.prototype.method approach?

function addBookToLibrabry(title, author, pages, read){
    library.push(new Book(title, author, pages, read))
}

function displayBook(){
    if(library.length === 0){
        document.getElementById('no-books').style.display = 'block';
        
    }else{
        document.getElementById('no-books').style.display = 'none'
        library.forEach((book) =>{
            let bookContainer = document.getElementById('books-container')
            bookContainer.innerHTML += `<div class="book">
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <h4>${book.pages}</h4>
            <h5>${book.read}</h5>
            <div class="info-delete-buttons">
            <button class="remove-book" onclick = "removeBook(${library.indexOf(book)})">Remove Book</button>
            </div>
        </div>`

        })
    }   
}


function bookDetails(){
    let title  = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages  = document.getElementById('pages').value;
    let read   = document.getElementById('read').value;
    
    return {title, author, pages, read};
   
}

function addBook(e){
    e.preventDefault();
    let {title, author, pages, read} = bookDetails();
    addBookToLibrabry(title, author, pages, read);
    document.getElementById('form').style.display = 'none'
}

function showForm(){
    document.getElementById('form').style.display = 'block'
    document.getElementById('no-books').style.display = 'none';
}

function removeBook(index){
    index === 0 ? library.shift() : library.splice(index, index)
    document.getElementById('books-container').innerHTML = ""
    displayBook()
}