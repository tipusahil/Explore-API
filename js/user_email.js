function user_emails() {

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(response => response.json())
.then(data => displayUsersEmails(data));

}

function displayUsersEmails(userData) {




}