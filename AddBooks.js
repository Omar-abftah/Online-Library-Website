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

    const form = document.getElementById('bookForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const publishedYear = document.getElementById('published').value;
        const publisher = document.getElementById('publisher').value;
        const quantity = document.getElementById('quantity').value;
        const category = document.getElementById('category').value;
        const isbn = document.getElementById('isbn').value;
        const description = document.getElementById('description').value;
        const cover = document.getElementById('Book_Cover').files[0];
        const reader = new FileReader();

        reader.onload = function (e) {

            const coverDataURL = e.target.result;
            const book = createBook(title, author, publishedYear, publisher, quantity, category, isbn, description, coverDataURL);
            const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
            existingBooks.push(book);
            localStorage.setItem('books', JSON.stringify(existingBooks));

            form.reset();
            alert('Book added successfully!');
        };

        reader.readAsDataURL(cover);
    });
});