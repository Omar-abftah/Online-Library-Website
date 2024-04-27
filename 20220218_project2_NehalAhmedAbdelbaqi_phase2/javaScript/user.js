document.addEventListener("DOMContentLoaded", () => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    renderBooks(books);

});

function renderBooks(obj) {
    let divForBook = document.querySelector('.wrapper');
    let id;
    obj.map((o) => {
        const booksDiv = document.querySelector('.c2');
        let s = '';
        s += `<div class="c2">`;
        s += `<br><h3>${o.title}</h3><br>`;
        s += `<img src="${o.cover}"/>`;
        s += '<div class="book-details">'
        s += `<p><b>Author</b>: ${o.author}<br/></p>`;
        s += `<p><b>Publisher</b>: ${o.publisher}<br/></p>`;
        s += `<p><b>Publishing Year</b>: ${o.publishedYear}<br/></p>`;
        s += `<p><b>ISBN</b>: ${o.isbn}<br/></p>`;
        s += `<p><b>Description</b>: ${o.description}<br/></p>`;
        if (o.quantity > 0) {
            s += `<p><b>Available to borrow<br/></p>`;
        }
        else {
            s += `<p><b>Currently not available<br/></p>`;
        }
        s += '<a href="borrow_book.html" class="btn">borrow</a>';
        s += '</div>'
        s += '</div>'
        divForBook.innerHTML = s;
        booksDiv.appendChild(divForBook);
    });
}
const searchBtn = document.querySelector('#search-btn');
let tempDiv = document.createElement('div');
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tempDiv.innerHTML = "";
    const books = JSON.parse(localStorage.getItem("books")) || [];
    getSearchResult(books);

})

function getSearchResult(obj) {
    const bookTitle = document.getElementById('search-input').value;
    let searchResult = document.querySelector('.search-result');
    let isBookFound = false;
    obj.map((o) => {
        if (o.title.toLowerCase() === bookTitle.toLowerCase()) {
            isBookFound = true;
            let s = '';
            s += `<br><h3>${o.title}</h3><br>`;
            s += `<img src="${o.cover}"/>`;
            s += `<p><b>Author</b>: ${o.author}<br/></p>`;
            s += `<p><b>Publisher</b>: ${o.publisher}<br/></p>`;
            s += `<p><b>Publishing Year</b>: ${o.publishedYear}<br/></p>`;
            s += `<p><b>ISBN</b>: ${o.isbn}<br/></p>`;
            s += `<p><b>Description</b>: ${o.description}<br/></p>`;
            s += `<p><b>Category</b>: ${o.category}<br/></p>`;
            if (o.quantity > 0) {
                s += `<p><b>Available to borrow<br/></p>`;
            }
            else {
                s += `<p><b>Currently not available<br/></p>`;
            }
            s += '<a href="borrow_book.html" class="btn">borrow</a>';
            tempDiv.innerHTML = s;
            searchResult.appendChild(tempDiv);
        }
    });
    if (isBookFound === false) {
        tempDiv.innerHTML = '<h3 class="error-msg">The book you are searching for is not available</h3>'
    }
    document.body.appendChild(tempDiv);
}

const borrowBtn = document.querySelector(".borrow-btn");
