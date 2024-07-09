const myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById('book-title').value;
  let author = document.getElementById('book-author').value;
  let page = document.getElementById('book-pages').value;
  let read = document.getElementById('finish-read').checked;

  let newBook = new Book(title, author, page, read);

  myLibrary.push(newBook);
  console.log(myLibrary);
}

// let newBookBtn = document.querySelector('#new-book-btn');
// newBookBtn.addEventListener( "click", function() {
//     let bookForm = document.querySelector('.form-container');
//     // console.log(bookForm);
//     bookForm.style.display = "block";
// })

//SHORTCUT:
document.getElementById('new-book-btn').addEventListener( "click", function(){
    document.querySelector('.form-container').style.display = "block";
})

document.querySelector('.form-container').addEventListener( "submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})