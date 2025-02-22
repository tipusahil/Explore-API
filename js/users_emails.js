function user_emails() {

    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then(data => displayUsersEmails(data));

}

function displayUsersEmails(usersData) {

    const ol_for_email = document.getElementById('ol_list_items_for_email');

    for (const oneUserData of usersData) {
        // console.log(oneUserData.name)
        console.log(oneUserData.email)


const li = document.createElement('li');
li.innerText =oneUserData.email;

ol_for_email.appendChild(li);
 

    }


}