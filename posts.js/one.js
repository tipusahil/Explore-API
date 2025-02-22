function loadAllPosts() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then(res => res.json())
    .then(data => displayAllPosts(data))

}


/* 
1. get the container element where i want to add the new elementss
2.create child element
3.set innerText or innerHTML
4.set appendChild
*/


function displayAllPosts (usersAllPosts) {

// console.log(usersAllPosts);
 const posts_main_container = document.getElementById('all_posts_container');// (1.)

for(const user1post1 of usersAllPosts) {
    console.log(user1post1)

 
    const div = document.createElement('div'); // (2.)
    div.classList.add('post')
    div.innerHTML = ` 
    <h4> User-Id: ${user1post1.id} </h4>
    <h5> post-title: ${user1post1.title} </h5>
    <h5> Description: ${user1post1.body} </h5>
     `;// (3.)



     posts_main_container.appendChild(div); //(4.)
}


}

// loadAllPosts()