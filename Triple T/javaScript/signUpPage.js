document.addEventListener("DOMContentLoaded", () => {
    function createUser(firstName, lastName, email, password, phoneNumber, streetAddress, postalCode, city, country, isAdmin) {
        return {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            streetAddress: streetAddress,
            postalCode: postalCode,
            city: city,
            country: country,
            isAdmin: isAdmin
        };
    }
    const answers = document.getElementsByClassName('form');
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = answers[i].querySelector('#first-name').value;
            const lastName = answers[i].querySelector('#last-name').value;
            const email = answers[i].querySelector('#email').value;
            const password = answers[i].querySelector('#password').value;
            const passwordConfirmation = answers[i].querySelector('#password-confirmation').value;
            const phoneNumber = answers[i].querySelector('#phone-number').value;
            const streetAddress = answers[i].querySelector('#street-address').value;
            const postalCode = answers[i].querySelector('#postal-code').value;
            const city = answers[i].querySelector('#city').value;
            const country = answers[i].querySelector('#country').value;
            const isAdmin = answers[i].querySelector('#admin').value;
            if (password === passwordConfirmation) {
                const user = createUser(firstName, lastName, email, password, phoneNumber, streetAddress, postalCode, city, country, isAdmin);
                let allUsers = JSON.parse(localStorage.getItem('users')) || [];
                allUsers.push(user);
                localStorage.setItem('users', JSON.stringify(allUsers));
                answers[i].reset();
                alert('You are all set');
                window.location.href = 'homePage.html';
            }
            else {
                alert('password and confirm password does not match');
            }
        })
    }
});