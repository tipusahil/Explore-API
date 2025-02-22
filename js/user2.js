

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')//< ekan (semiclone (;) dil error dibe, )
    .then(response => response.json())
    .then(data => console.log(data))
}