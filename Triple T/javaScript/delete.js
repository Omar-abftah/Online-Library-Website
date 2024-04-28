const deleteBtn = document.querySelector('#btn');

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchValue = document.getElementById('bookTitle').value;
    let obj = JSON.parse(localStorage.getItem("books")) || [];
    let isBookFound = false;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].title.toLowerCase() === searchValue.toLowerCase()) {
            obj.splice(i, 1);
            localStorage.setItem('books', JSON.stringify(obj));
            alert("Book is found and deleted");
            isBookFound = true;
            break;
        }
    }
    if (!isBookFound) {
        alert("Book is not found");
    }
});