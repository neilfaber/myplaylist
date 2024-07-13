const image = document.getElementById('cover'),
title = document.getElementById('music-title'),
artist = document.getElementById('music-artist'),
currentTimeEl = document.getElementById('current-time'),
durationEl = document.getElementById('duration'),
progress = document.getElementById('progress'),
playerProgress = document.getElementById('player-progress')
const prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next'),
playBtn = document.getElementById('play'),
background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path:'assets/2.mp3',
        displayName: 'Unforgettable',
        cover: 'assets/2.jpg',
        artist:'PlayyPretend',
    },
    {
        path:'assets/1.mp3',
        displayName: 'Under The Influence',
        cover: 'assets/1.jpg',
        artist:'Chris Brown',
    },
    {
        path:'assets/23.mp3',
        displayName: 'The Hills',
        cover: 'assets/23.png',
        artist:'The Weekend',
    },
    {
        path:'assets/37.mp3',
        displayName: 'slow down my thoughts',
        cover: 'assets/37.png',
        artist:'Zachary Knowles',
    },
    {
        path:'assets/31.mp3',
        displayName: 'Annihilate',
        cover: 'assets/1.gif',
        artist:'Metro Boomin',
    },
    {
        path:'assets/33.mp3',
        displayName: 'Your Guilty Pleasure',
        cover: 'assets/33.jpg',
        artist:'Henry Verus',
    },
    {
        path:'assets/4.mp3',
        displayName: 'One of the Girls',
        cover: 'assets/4.jpg',
        artist:'The Weekend',
    },
    {
        path:'assets/34.mp3',
        displayName: 'Cigarettes & Alcohol',
        cover: 'assets/34.jpg',
        artist:'Santino Le Saint',
    },
    {
        path:'assets/21.mp3',
        displayName: 'Way Down We Go',
        cover: 'assets/21.jpg',
        artist:'Kaleo',
    },
    {
        path:'assets/5.mp3',
        displayName: 'Million Dollar Baby',
        cover: 'assets/5.jpg',
        artist:'Tommy Richman',
    },
    {
        path:'assets/3.mp3',
        displayName: 'Until I Found You',
        cover: 'assets/3.jpg',
        artist:'Steven Sanchez',
    },
    {
        path:'assets/6.mp3',
        displayName: 'After Dark x Sweater Weather',
        cover: 'assets/6.png',
        artist:'Cole Russo',
    },
    {
        path:'assets/7.mp3',
        displayName: 'Shinunoga E-Wa',
        cover: 'assets/7.jpg',
        artist:'Fujii Kaze',
    },
    {
        path:'assets/8.mp3',
        displayName: 'Love Nwantiti',
        cover: 'assets/8.jpg',
        artist:'CKay',
    },
    {
        path:'assets/35.mp3',
        displayName: 'Strawberry Kisses',
        cover: 'assets/35.png',
        artist:'Amber-Simone',
    },
    {
        path:'assets/9.mp3',
        displayName: 'Don\'t Copy My Flow',
        cover: 'assets/9.png',
        artist:'George Kipa',
    },
    {
        path:'assets/10.mp3',
        displayName: 'Wanna Be Yours',
        cover: 'assets/10.png',
        artist:'Artic Monkeys',
    },
    {
        path:'assets/12.mp3',
        displayName: 'LovelyBastards x Frownies',
        cover: 'assets/12.png',
        artist:'ZIO',
    },
    {
        path:'assets/13.mp3',
        displayName: 'Riptide',
        cover: 'assets/13.png',
        artist:'Vance Joy',
    },
    {
        path:'assets/36.mp3',
        displayName: 'Sometimes (Backwood)',
        cover: 'assets/36.png',
        artist:'Gigi Perez',
    },
    {
        path:'assets/14.mp3',
        displayName: 'Lovely',
        cover: 'assets/14.png',
        artist:'Billy Eilish & Khalid',
    },
    {
        path:'assets/15.mp3',
        displayName: 'Dusk Till Dawn',
        cover: 'assets/15.png',
        artist:'Zayn',
    },
    {
        path:'assets/16.mp3',
        displayName: 'Somewhere Only We Know',
        cover: 'assets/16.png',
        artist:'Keane',
    },
    {
        path:'assets/17.mp3',
        displayName: 'Past Lives',
        cover: 'assets/17.jpg',
        artist:'Sapientdream & Slushii',
    },
    {
        path:'assets/18.mp3',
        displayName: 'Another Love',
        cover: 'assets/18.jpg',
        artist:'Tom Odell',
    },
    {
        path:'assets/19.mp3',
        displayName: 'Demons',
        cover: 'assets/19.png',
        artist:'Imagine Dragons',
    },
    {
        path:'assets/20.mp3',
        displayName: 'Let Her Go',
        cover: 'assets/20.jpg',
        artist:'Passengers',
    },
    {
        path:'assets/22.mp3',
        displayName: 'Harley\'s in Hawai',
        cover: 'assets/22.png',
        artist:'Katy Perry',
    },
    {
        path:'assets/41.mp3',
        displayName: 'Fruits of the Spirit',
        cover: 'assets/41.jpg',
        artist:'Jay Electronica',
    },
    {
        path:'assets/40.mp3',
        displayName: 'Summer Reign',
        cover: 'assets/40.png',
        artist:'Larry June & The Alchemist',
    },
    {
        path:'assets/39.mp3',
        displayName: 'Something\'s Wrong In Heaven',
        cover: 'assets/39.png',
        artist:'Marlon Craft',
    },
    {
        path:'assets/42.mp3',
        displayName: 'Dolomeals',
        cover: 'assets/42.jpg',
        artist:'Medhane',
    },
    {
        path:'assets/43.mp3',
        displayName: 'Under The Magnolia Tree',
        cover: 'assets/43.jpg',
        artist:'Pale Jay',
    },
    {
        path:'assets/24.mp3',
        displayName: 'Hills x Creepin\' x Color Violet',
        cover: 'assets/24.png',
        artist:'Faint.',
    },
    {
        path:'assets/44.mp3',
        displayName: 'nyc in 1940',
        cover: 'assets/44.jpg',
        artist:'berlioz',
    },
    {
        path:'assets/45.mp3',
        displayName: 'Show Me',
        cover: 'assets/45.jpg',
        artist:'Joey Bada$$',
    },
    {
        path:'assets/46.mp3',
        displayName: '8am in Charlotte',
        cover: 'assets/46.jpg',
        artist:'Drake',
    },
    {
        path:'assets/25.mp3',
        displayName: 'Am I Dreaming',
        cover: 'assets/25.png',
        artist:'Metro Boomin',
    },
    {
        path:'assets/26.mp3',
        displayName: 'Daylight',
        cover: 'assets/26.png',
        artist:'David Kushner',
    },
    {
        path:'assets/27.mp3',
        displayName: 'Dead Bed',
        cover: 'assets/27.png',
        artist:'Powfu',
    },
    {
        path:'assets/28.mp3',
        displayName: 'Falling',
        cover: 'assets/28.png',
        artist:'Trevor Daniel',
    },
    {
        path:'assets/29.mp3',
        displayName: 'Calling',
        cover: 'assets/1.png',
        artist:'Metro Boomin',
    },
    {
        path:'assets/30.mp3',
        displayName: 'Sunflower',
        cover: 'assets/30.jpg',
        artist:'Post Malone',
    },
    {
        path:'assets/38.mp3',
        displayName: 'September Skies',
        cover: 'assets/38.png',
        artist:'Benjamin Amaru',
    },
    {
        path:'assets/32.mp3',
        displayName: 'Lucid Dreams',
        cover: 'assets/32.jpg',
        artist:'Kid Travis',
    },
    {
        path:'assets/11.mp3',
        displayName: 'Skyfall',
        cover: 'assets/11.png',
        artist:'Adele',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    //Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    //Set button hover title
    playBtn.setAttribute('title','Pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    //Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    //Set button hover title
    playBtn.setAttribute('title','Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const { duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar (e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
