const submitBtn = document.querySelector("#btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let bookTitle = document.querySelector("#book-title");
    let author = document.querySelector("#author");
    let format = document.querySelector("#format");
    let publishingYear = document.querySelector("#published");
    let ISBN = document.querySelector("#ISBN");
    let language = document.querySelector("#language");
    let description = document.querySelector("#description");
    let category = document.querySelector("#category");
    let obj = JSON.parse(localStorage.getItem('books')) || [];
    let isBookFound = false;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].title.toLowerCase() === bookTitle.value.toLowerCase()) {
            obj[i].title = bookTitle.value;
            obj[i].isbn = ISBN.value;
            obj[i].publishedYear = publishingYear.value;
            obj[i].author = author.value;
            obj[i].language = language.value;
            obj[i].description = description.value;
            obj[i].format = format.value;
            obj[i].category = category.value;
            if (obj[i].category.toLowerCase() === 'fantasy') {
                id = '#fantasy-books';
            }
            else if (obj[i].category.toLowerCase() === 'romance') {
                id = '#romance-books';
            }
            else if (obj[i].category.toLowerCase() === 'trending') {
                id = '#trending-books';
            }
            isBookFound = true;
            localStorage.setItem('books', JSON.stringify(obj));
            break;
        }
    }
    if (isBookFound === false) {
        alert("The book you want to edit is not available");
    }
    else {
        alert("Book edited successfully");
    }
})