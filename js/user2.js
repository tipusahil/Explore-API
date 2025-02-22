

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')//< ekan (semiclone (;) dil error dibe, )
        .then(response => response.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(users) {

    for (const user1 of users) {
        //    console.log(user1);
        // console.log(user1.email);
        // console.log(user1.username);
        console.log(user1.username);





    }

}