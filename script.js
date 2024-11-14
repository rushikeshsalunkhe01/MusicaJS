
let song_image = document.getElementById("cover_photo");
let song_singer = document.getElementById("singer");
let song_play = document.getElementById("play");
let song_prev = document.getElementById("prev");
let song_next = document.getElementById("next");
let song_title = document.getElementById("title"); 

let songs_list = [
    { Image: 'images/gandibat.webp', title: 'Gandibat', Song: 'music/Gandibat.mp3', Singer: 'Mika Singh / Kalpana Patowary' },
    { Image: 'images/chikni_Kamar.jpeg', title: ' Chikni Kamar', Song: 'music/Dhadang Dhang.mp3', Singer: 'Udit Narayan / Alka Yagnik' },
    { Image: 'images/love3.jpeg', title: 'Ye Tune Kya Kiya', Song: 'music/Ye Tune Kya Kiya.mp3', Singer: 'Javed Bashir' },
    { Image: 'images/love5.jpg', title: 'Lonely', Song: 'music/lonely.mp3', Singer: 'Yo Yo Honey Singh' },
    { Image: ' images/love.jpg', title: 'Aankhen Bandh Karke', Song: 'music/aankhen bandh karke.mp3', Singer: 'Shreya Ghoshal / Sajid Wajid' },
    { Image: 'images/love1.jpg', title: 'Main Diwana', Song: 'music/main diwana.mp3', Singer: 'Udit Narayan' },
    { Image: 'images/love.jpg', title: 'Mannata', Song: 'music/Mannata.mp3', Singer: 'Sonu Nigam / Kavita Krishnamurthy' },
    { Image: 'images/love4.jpg', title: 'Mera Dil Na Todo', Song: 'music/mera dil na todo.mp3', Singer: 'Abhijeet' },
    { Image: 'images/love5.jpg', title: 'Pyaar Do Pyaar Lo', Song: 'music/Pyaar Do Pyaar Lo.mp3', Singer: 'Mika Singh' },
    { Image: 'images/love1.jpg', title: 'Bhai', Song: 'music/Bhai.MP3', Singer: 'Anu Malik' },
];
let currentIndex = 0;
let isPlaying = false;
let audio = new Audio(songs_list[currentIndex].Song);

function updateSongDetails() {
    song_image.src = songs_list[currentIndex].Image || 'default-image.jpg';
    song_singer.innerHTML = songs_list[currentIndex].Singer || 'Unknown Artist';
    song_title.innerHTML = songs_list[currentIndex].title || 'Unknown Title'; // Display title
    audio.src = songs_list[currentIndex].Song;
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        song_play.innerHTML = '<i class="fas fa-play fa-3x"></i>';
    } else {
        audio.play();
        song_play.innerHTML = '<i class="fas fa-pause fa-3x"></i>';
    }
    isPlaying = !isPlaying;
}


song_play.addEventListener("click", togglePlay);


song_next.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % songs_list.length;
    audio.pause();
    isPlaying = false;
    updateSongDetails();
    togglePlay();
});


song_prev.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + songs_list.length) % songs_list.length;
    audio.pause();
    isPlaying = false;
    updateSongDetails();
    togglePlay();
});


updateSongDetails();
