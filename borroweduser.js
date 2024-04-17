var borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
function calculateRemainingDays(dueDate) {
  var now = new Date();
  var due = new Date(dueDate);
  var diff = due - now;
  var days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
  return days;
}
var table = document.querySelector("table");
borrowedBooks.forEach(function(book) {
  var row = table.insertRow();
  row.insertCell().textContent = book.bookTitle;
  row.insertCell().textContent = book.startDate;
  row.insertCell().textContent = book.dueDate;
  var remainingDays = calculateRemainingDays(book.dueDate);
  row.insertCell().textContent = remainingDays + " days";
});
