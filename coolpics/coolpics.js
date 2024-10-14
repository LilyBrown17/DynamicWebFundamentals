var button = document.querySelector('button');
 
function onButtonClick() {
    var element = document.getElementById("items");

    element.classList.toggle('hidden');
}
 
button.addEventListener('click', onButtonClick);

var images = document.querySelectorAll('.gallery img');
images.forEach(image => {
    image.addEventListener('click', (event) => openViewer)
});

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
    var image1_split = "";

    var image2 = image1_split + "-full.jpeg";
    console.log(image2);

    element.insertAdjacentHTML('afterbegin', viewerTemplate(image2, image1.alt));
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
	// get the src attribute from that element and 'split' it on the "-"
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
}

function closeViewer() {

}

