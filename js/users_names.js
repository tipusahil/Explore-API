

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')//< ekan (semiclone (;) dil error dibe, )
        .then(response => response.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(users) {


    const ol = document.getElementById('ol_list_item');


    for (const user1 of users) {
        //    console.log(user1);
        // console.log(user1.email);
        // console.log(user1.username);
        console.log(user1.username);


        // list item create:
       const li = document.createElement('li');
       li.innerText = 'user';
    //    li.innerText = user1.email; 
       li.innerText = user1.username; 
        
       ol.appendChild(li);



    }

}