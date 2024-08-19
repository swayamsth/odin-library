const myLibrary = [];

function Book(title, author, pages, hasRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(hasRead);
}

function addBookToLibrary(bookObject) {
  const newBook = new Book(
    bookObject.bookTitle,
    bookObject.bookAuthor,
    bookObject.bookPages,
    bookObject.hasRead
  );
  myLibrary.push(newBook);
  loopArray();
}

function loopArray(){
  const books = document.querySelector(".books");
  books.innerHTML = "";
  
  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let readStatus = document.createElement("button");
    let deleteButton = document.createElement("button");

    readStatus.classList.add("bookCardBtn")
    deleteButton.classList.add("deleteCardBtn")

    title.textContent = myLibrary[i].title;
    author.textContent = `Author: ${myLibrary[i].author}`;
    pages.textContent = `Pages: ${myLibrary[i].pages}`;
    readStatus.textContent = myLibrary[i].read ? 'Read' : 'Not Read';
    deleteButton.textContent = "Remove";

    deleteButton.addEventListener('click', () => {
      removeBook(myLibrary[i]);
    })

    readStatus.addEventListener('click', (e) => {
      let status = e.target.textContent;
      if (status === 'Read'){
        myLibrary[i].read = false;
        readStatus.textContent = 'Not Read';
      } else if (status === 'Not Read'){
        myLibrary[i].read = true;
        readStatus.textContent = 'Read';
      }
    })

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(deleteButton);
    bookCard.classList.add("bookCardContent");
    books.appendChild(bookCard);
  }
}

loopArray();

function removeBook(index){
  myLibrary.splice(index, 1);
  loopArray();
}

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
  favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let bookObject = Array.from(document.querySelectorAll(".modal input")).reduce((acc, input) => {
    if (input.type === "checkbox") {
      acc[input.id] = input.checked;
    } else {
      acc[input.id] = input.value;
    }
    return acc;
  }, {});

  addBookToLibrary(bookObject);

  const form = document.querySelector(".modal");
  form.reset();

  favDialog.close();
});