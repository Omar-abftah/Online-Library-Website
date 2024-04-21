document.addEventListener("DOMContentLoaded", function () {
    function createBook(title, author, publishedYear, publisher, quantity, category, isbn, description, cover) {
        return {
            title: title,
            author: author,
            publishedYear: publishedYear,
            publisher: publisher,
            quantity: quantity,
            category: category,
            isbn: isbn,
            description: description,
            cover: cover  
        };
    }
    const forms = document.getElementsByClassName('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (event) {
            event.preventDefault();
            const title = forms[i].querySelector('#title').value;
            const author = forms[i].querySelector('#author').value;
            const publishedYear = forms[i].querySelector('#published').value;
            const publisher = forms[i].querySelector('#publisher').value;
            const quantity = forms[i].querySelector('#quantity').value;
            const category = forms[i].querySelector('#category').value;
            const isbn = forms[i].querySelector('#isbn').value;
            const description = forms[i].querySelector('#description').value;
            const cover = forms[i].querySelector('#Book_Cover').files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                const coverDataURL = e.target.result;
                const book = createBook(title, author, publishedYear, publisher, quantity, category, isbn, description, coverDataURL);
                const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
                existingBooks.push(book);
                localStorage.setItem('books', JSON.stringify(existingBooks));
                forms[i].reset();
                alert('Book added successfully!');
            };
            reader.readAsDataURL(cover);
        });
    }
});
