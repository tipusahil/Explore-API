function loadAllPosts() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then(res => res.json())
    .then(data => displayAllPosts(data))

}

function displayAllPosts (usersAllPosts) {

// console.log(usersAllPosts);
 const posts_main_container = document.getElementById('')

for(const user1post1 of usersAllPosts) {
    // console.log(user1post1)


}


}