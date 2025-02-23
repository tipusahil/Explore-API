function SeeAllPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
        .then(response => response.json())
        .then(data => displayPhotos(data))
}


function displayPhotos(photos) {

    const photos_container = document.getElementById('all_photos_container');

    for (const photo of photos) {
        // console.log(photo);

        const div = document.createElement('div');
        div.innerHTML = `
        <h3>user-id:${photo.id} </h3>
        <h4> Title : ${photo.title} </h4>
        <h5> thambnail : ${photo.thumbnailUrl}</h5>
        <h5> photo-url : ${photo.url}</h5>
        `;


        photos_container.appendChild(div);
// 

    }

}