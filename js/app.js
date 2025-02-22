function loadData2() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data))
} ;

function displayUsers(dataEdikeDokbe) {
console.log(dataEdikeDokbe)
}

