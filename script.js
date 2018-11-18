let myLibrary = [];

let modal = document.getElementById('form');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function Submit() {
    let createtp = document.createElement("p");
    createtp.setAttribute("id", "titletext");
    let title = document.getElementById("title").value; 
    let titlenode = document.createTextNode(title);
    createtp.appendChild(titlenode);
    document.getElementById("title-div").appendChild(createtp);

    let createap = document.createElement("p");
    createap.setAttribute("id", "authortext");
    let author = document.getElementById("author").value;
    let authornode = document.createTextNode(author);
    createap.appendChild(authornode);
    document.getElementById("author-div").appendChild(createap);

    let createpp = document.createElement("p");
    createpp.setAttribute("id", "pagestext")
    let pages = document.getElementById("pages").value;
    let pagesnode = document.createTextNode(pages);
    createpp.appendChild(pagesnode);
    document.getElementById("pages-div").appendChild(createpp);

    let createrp = document.createElement("p");
    createrp.setAttribute("id", "readtext")
    let read = document.getElementById("read").value;
    let readnode = document.createTextNode(read);
    createrp.appendChild(readnode);
    document.getElementById("read-div").appendChild(createrp);

    let createdp = document.createElement("button");
    createdp.setAttribute("id", "deletetext");
    let deletebtn = document.getElementById("delete"); 
    let deletenode = document.createTextNode("Delete");
    createdp.appendChild(deletenode);
    document.getElementById("delete-div").appendChild(createdp);
    createdp.onclick = function() {
        titletext.remove();
        authortext.remove();
        pagestext.remove();
        readtext.remove();
        deletetext.remove();
    }

    document.getElementById('form').style.display='none';
}

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}