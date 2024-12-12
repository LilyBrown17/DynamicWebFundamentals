import lyrics from './lyrics.mjs';

var images = document.querySelectorAll('.grid img');

images.forEach((image) => {
	image.addEventListener('click', openLyric)
});

function lyricTemplate(lyric) {
	return `<div class="viewer" id="${lyric.id}">
		<button class="close-viewer">X</button>
        <div class="content">
            <a href="${lyric.link}">
                <h4>${lyric.title}</h4>
            </a>
            <div class="credits">
                <h5>Song: ${lyric.composer}</h5>
                <h5>Lyrics: ${lyric.writer}</h5>
            </div>
            <p class="text">${lyric.text}</p>
        </div>
	</div>`;
}

function openLyric(event) {
	var image1 = event.target;
	console.log(image1.id);
	
	var image1_id = image1.id;
	
	lyrics.forEach((lyric) => {
		if (lyric.id == image1_id) {
			document.body.insertAdjacentHTML('afterbegin', lyricTemplate(lyric));
		}
	});
		
	var x_button = document.querySelector('.viewer button');
	x_button.addEventListener('click', closeLyric);
}

function closeLyric() {
    var viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}