

function prac() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then(data => expressFUNC(data))

}

const expressFUNC = function (data){
console.log(data)
}