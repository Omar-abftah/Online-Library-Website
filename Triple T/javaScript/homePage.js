
function redirectLoginBtn() {
    window.location.href = ("LoginPage.html");
}
function redirectSignUpBtn() {
    window.location.href = ("SignUpPage.html");
}

searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle("active");
}