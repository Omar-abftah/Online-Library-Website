document.addEventListener("DOMContentLoaded", () => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    renderBooks(books);

});

function renderBooks(obj) {
    let tempDiv = document.querySelector('.wrapper');
    let id;
    obj.map((o) => {
        let s = '';
        s += `<div class="c2">`;
        s += `<img src="${o.cover}"/>`;
        s += '<div class="book-details">'
        s += `<h3>${o.title}</h3>`;
        s += `<p><b>Author</b>: ${o.author}<br/></p>`;
        s += `<p><b>Publisher</b>: ${o.publisher}<br/></p>`;
        s += `<p><b>Publishing Year</b>: ${o.publishedYear}<br/></p>`;
        s += `<p><b>ISBN</b>: ${o.isbn}<br/></p>`;
        s += `<p><b>Description</b>: ${o.description}<br/></p>`;
        s += `<p><b>Quantity</b>: ${o.quantity}<br/></p>`;
        if (o.quantity > 0) {
            s += `<p><b>Available to borrow<br/></p>`;
        }
        else {
            s += `<p><b>Currently not available<br/></p>`;
        }
        s += '</div>';
        s += '</div>'
        tempDiv.innerHTML += s;
    });
}

let addnewbookButtons = document.querySelectorAll('#addbook');
addnewbookButtons.forEach(button => {
    button.addEventListener('click', function () {
        window.open('AddBooks.html', '_blank');
    });
});

