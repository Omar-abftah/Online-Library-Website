document.addEventListener("DOMContentLoaded", () => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    renderBooks(books);

});

function renderBooks(obj) {
    let tempDiv = document.createElement('div');
    tempDiv.classList.add('book')
    let id;
    for (let i = 0; i < obj.length; i++) {
        const booksDiv = document.querySelector('.c2');
        let s = '';
        s += `<br><h3>${obj[i].title}</h3>`;
        s += `<img src="${obj[i].cover}"/>`;
        s += '<div class="book-details">'
        s += `<p><b>Author</b>: ${obj[i].author}<br/></p>`;
        s += `<p><b>Publisher</b>: ${obj[i].publisher}<br/></p>`;
        s += `<p><b>Publishing Year</b>: ${obj[i].publisherYear}<br/></p>`;
        s += `<p><b>ISBN</b>: ${obj[i].isbn}<br/></p>`;
        s += `<p><b>Description</b>: ${obj[i].description}<br/></p>`;
        if (obj[i].quantity > 0) {
            s += `<p><b>Available to borrow<br/></p>`;
        }
        else {
            s += `<p><b>Currently not available<br/></p>`;
        }
        s += '<button class="borrow-btn">Borrow</button>';
        s += '</div>'
        tempDiv.innerHTML = s;
        tempDiv.classList.add('book');
        booksDiv.appendChild(tempDiv);
    }
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
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].title.toLowerCase() === bookTitle.toLowerCase()) {
            isBookFound = true;
            let s = '';
            s += `<br><h3>${obj[i].title}</h3>`;
            s += `<img src="${obj[i].cover}"/>`;
            s += `<p><b>Author</b>: ${obj[i].author}<br/></p>`;
            s += `<p><b>Publisher</b>: ${obj[i].publisher}<br/></p>`;
            s += `<p><b>Publishing Year</b>: ${obj[i].publishedYear}<br/></p>`;
            s += `<p><b>ISBN</b>: ${obj[i].isbn}<br/></p>`;
            s += `<p><b>Description</b>: ${obj[i].description}<br/></p>`;
            s += `<p><b>Category</b>: ${obj[i].category}<br/></p>`;
            if (obj[i].quantity > 0) {
                s += `<p><b>Available to borrow<br/></p>`;
            }
            else {
                s += `<p><b>Currently not available<br/></p>`;
            }
            s += '<button class="borrow-btn">Borrow</button>';
            tempDiv.innerHTML = s;
            searchResult.appendChild(tempDiv);
            break;
        }
    }
    if (isBookFound === false) {
        tempDiv.innerHTML = '<h3 class="error-msg">The book you are searching for is not available</h3>'
        searchResult.appendChild(tempDiv);
    }
}

const borrowBtn = document.querySelector(".borrow-btn");

borrowBtn.addEventListener('click', () => {
    window.location.href = "borrow_book.html";
});