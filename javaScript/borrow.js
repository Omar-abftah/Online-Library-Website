document.getElementById("form").addEventListener("submit", 
function(event) {
    event.preventDefault();
    var borrowerName = document.getElementById("borrowerName").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var nationalId = document.getElementById("national-id").value;
    var bookTitle = document.getElementById("book-title").value;
    var startDate = document.getElementById("start_date").value;
    var dueDate = document.getElementById("due_date").value;
    var borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    var newBook = {
      "bookTitle": bookTitle,
      "borrowerName":borrowerName,
      "email": email,
      "telephone": telephone,
      "nationalId": nationalId,
      "startDate": startDate,
      "dueDate": dueDate
    };
    borrowedBooks.push(newBook);
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    document.getElementById("form").reset();
    alert('Book borrowed successfully!');
  });
