var button = document.querySelector('button');
 
function onButtonClick() {
    var element = document.getElementById("items");

    element.classList.toggle('hidden');
}
 
button.addEventListener('click', onButtonClick);