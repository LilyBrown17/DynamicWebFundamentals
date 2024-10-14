var button = document.querySelector('h2 button');
var images = document.querySelectorAll('.gallery img');

button.addEventListener('click', onButtonClick);

images.forEach(image => {image.addEventListener('click', openViewer)});
 
function onButtonClick() {
    var element = document.getElementById("items");

    element.classList.toggle('hidden');
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function openViewer(event) {
    var image1 = event.target;
    console.log(image1.src);

    var image1_name = image1.src;
    var image1_split = image1_name.split('-');

    var image2 = image1_split[0] + "-full.jpeg";
    console.log(image2);

    document.body.insertAdjacentHTML('afterbegin', viewerTemplate(image2, image1.alt));

    var x_button = document.querySelector('.viewer button');
    x_button.addEventListener('click', closeViewer);
}

function closeViewer() {
    var viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

