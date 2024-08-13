const myLibrary = [];

function Book(title, author, pages, hasRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = hasRead;
}

function addBookToLibrary() {
  let title = "Sixty Shades of Coding";
  let author = "Johhny";
  let pages = "245";
  let hasRead = true;
  myLibrary.push(new Book(title, author, pages, hasRead));
}

addBookToLibrary();
console.log(myLibrary);