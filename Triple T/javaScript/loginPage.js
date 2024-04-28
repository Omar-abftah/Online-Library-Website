document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', (e) => {
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const allUsers = JSON.parse(localStorage.getItem('users')) || [];
        e.preventDefault();
        let isUserFound = false;
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email === email) {
                if (allUsers[i].password === password) {
                    alert("Login completed successfully")
                    if (allUsers[i].isAdmin === 'on') {
                        window.location.href = 'AdminHomePage.html';
                    }
                    else {
                        window.location.href = 'UserHomePage.html';
                    }
                    isUserFound = true;
                    return;
                }
                else {
                    alert("Invalid password");
                    return;
                }
            }
        }
        if (!isUserFound) {
            alert("We can't find the email you are asking for")
        }
    });
});