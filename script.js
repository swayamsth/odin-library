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

function loopArray(){
  const main = document.querySelector(".main");
  
  for (let i = 0; i < myLibrary.length; i++){
    const bookCard = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("p");
    let pages = document.createElement("p");

    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    main.appendChild(bookCard);
  }
}

loopArray();

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
  favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close();
});