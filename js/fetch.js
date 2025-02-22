/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then( response => console.log(response))// (response.json) er (.json) ta josn er (parse) er motoi kintu same na
      .then(json => console.log(json))

    //   response => response.json()
 */
/* 
// website etheke newa 

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


 */



// 2. amr banano:
function loadData() {

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json));


}