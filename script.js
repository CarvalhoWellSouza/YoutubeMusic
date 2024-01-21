const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name")
const song = document.getElementById ('audio')
const cover = document.getElementById ('cover')
const play = document.getElementById('play');

const ModoAviao = {
songName : 'Modo Avião',
artist : 'Ludmilla',
file: 'Lud Session feat. Gloria Groove'
};

const Cafédamanhã = {
songName : 'Café da Manhã',
artist : 'Ludmilla & Luisa Sonza',
file: 'CAFÉ DA MANHÃ'
};

const Sentadona = {
songName : 'Sentadona',
artist : 'Luisa Sonza',
file: 'SentaDONA (remix)'
};

let isPlaying = false;



function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play()
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}    

function playpauseDecider (){
    if(isPlaying === true){

        pauseSong();
    }
    else {
        playSong();
    }

}

play.addEventListener('click', playpauseDecider);
