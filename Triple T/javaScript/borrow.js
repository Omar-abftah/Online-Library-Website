document.addEventListener("DOMContentLoaded", function () {
  function createBorrowedBook(bookTitle, borrowerName, email, telephone, nationalId, startDate, dueDate) {
      return {
          bookTitle: bookTitle,
          borrowerName: borrowerName,
          email: email,
          telephone: telephone,
          nationalId: nationalId,
          startDate: startDate,
          dueDate: dueDate
      };
  }

  const forms = document.getElementsByClassName('form');
  for (let i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function (event) {
          event.preventDefault();
          const borrowerName = forms[i].querySelector('#borrowerName').value;
          const email = forms[i].querySelector('#email').value;
          const telephone = forms[i].querySelector('#telephone').value;
          const nationalId = forms[i].querySelector('#national-id').value;
          const bookTitle = forms[i].querySelector('#book-title').value;
          const startDate = forms[i].querySelector('#start_date').value;
          const dueDate = forms[i].querySelector('#due_date').value;

          const newBorrowedBook = createBorrowedBook(bookTitle, borrowerName, email, telephone, nationalId, startDate, dueDate);
          const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
          borrowedBooks.push(newBorrowedBook);
          localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
          forms[i].reset();
          alert('Book borrowed successfully!');
      });
  }
});
