// https://api.artic.edu/docs/#quick-start
const url = "https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=50&fields=id,title,image_id";
const imgTag = document.querySelector('img')
let titleTag = document.querySelector('.title')
const randomTag = document.querySelector('.random')

const getArtwork = function () {
  fetch(url)
  	.then(response => response.json())
  	.then(data => {
    const randomNumber = Math.floor(Math.random() * 49)
    let imgID = data.data[randomNumber].image_id;
    titleTag.innerHTML = data.data[randomNumber].title
    imgTag.src = `https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`
  })  
}

randomTag.addEventListener('click', function() {
  getArtwork()
})

