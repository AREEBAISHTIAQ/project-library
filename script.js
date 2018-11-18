let myLibrary = [];

var modal = document.getElementById('form');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function Submit() {
    let submit = document.getElementById("submit").addEventListener("click", function() {
        document.getElementById("showtitle").innerHTML = document.getElementById("title").value;
        document.getElementById("showauthor").innerHTML = document.getElementById("author").value;
        document.getElementById("showpages").innerHTML = document.getElementById("pages").value;
        //document.getElementById("showread").innerHTML = document.getElementById("read").value;

        document.getElementById("form").style.display='none';
    });
}

function Radio(read) {
    document.getElementById("showread").value = read;
} 

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function Remove() {
   location.reload();
}
