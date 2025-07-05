const songs = [
    "songs/Enthinee-Mizhi-Karthik-Shreya-Ghoshal.mp3",
    "songs/Zun-Zun-Karthik-Madhu-Balakrishnan.mp3",
    "songs/Enthinee-Mizhi-Karthik-Shreya-Ghoshal.mp3",
    "songs/Zun-Zun-Karthik-Madhu-Balakrishnan.mp3"  
];

const audio = document.getElementById("audio");
let currentSong=null;
let isPlaying = false;


function playSong(index){
    if(index === currentSong && isPlaying ){
        audio.pause();
        isPlaying = false;
        console.log("paused")

    }
else{

const songPath = songs[index];
audio.src = songPath;

audio.play()
    .then(() => {
        currentSong=index;
        isPlaying=true;
        console.log(`playing song ${index}`);
    })

    .catch((error) => console.error("Error:", error));
}

}

