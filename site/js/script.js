let modal = document.querySelector('#myModal')

let images = Array.from(document.querySelectorAll('.menu-item'))
let modalImg = document.getElementById('img01')
let captionText = document.getElementById('caption')

images.forEach((image) => {
    image.onclick = function(){
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
})

let span = document.getElementsByClassName('close')[0];

span.onclick= function() {
    modal.style.display = 'none';
}