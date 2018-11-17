let myLibrary = [];

function Click() {
    let newtitle = prompt("Enter the name of the book, please");
    let newauthor = prompt("Enter the name of the author, please");
    document.getElementById("showtitle").innerText = newtitle;
    document.getElementById("showauthor").innerText = newauthor;
}
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

console.log(Book())

function addBookToLibrary() {

}