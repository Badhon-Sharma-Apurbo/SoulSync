// Songs data - edit here to change/add songs. Updated with 2025 trends for relevance.
const songs = {
    happy: [
        { name: "APT", artist: "ROSÉ, Bruno Mars", lang: "English", url: "https://www.youtube.com/watch?v=ekr2nIex040" },
        { name: "STAY", artist: "The Kid LAROI, Justin Bieber", lang: "English", url: "https://www.youtube.com/watch?v=kTJczUoc26U" },
        { name: "Kala Chashma", artist: "Amar Arshi, Badshah, Neha Kakkar", lang: "Hindi", url: "https://www.youtube.com/watch?v=k4yXQkG2s1E" },
        { name: "Jadukor", artist: "Pritom Hasan", lang: "Bangla", url: "https://www.youtube.com/watch?v=YXaF54XVS9U" }
    ],
    emotional: [
        { name: "Hello", artist: "Adele", lang: "English", url: "https://www.youtube.com/watch?v=YQHsXMglC9A" },
        { name: "Tum Hi Ho", artist: "Arijit Singh", lang: "Hindi", url: "https://www.youtube.com/watch?v=Umqb9KENgmk" },
        { name: "Nei Tumi Aager Moto", artist: "Anupam Roy", lang: "Bangla", url: "https://www.youtube.com/watch?v=n-BhWxcvKOk" },
        { name: "Sanam Teri Kasam", artist: "Himesh Reshammiya, Ankit Tiwari, Palak Muchhal", lang: "Hindi", url: "https://www.youtube.com/watch?v=_Dpfz-1zQIw" }
    ],
    romantic: [
        { name: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", lang: "English", url: "https://www.youtube.com/watch?v=kPa7bsKwL-c" },
        { name: "Apna Bana Le", artist: "Arijit Singh, Sachin-Jigar", lang: "Hindi", url: "https://www.youtube.com/watch?v=oxoHDrL5_Rc" },
        { name: "Saajna", artist: "Ash King", lang: "Bangla", url: "https://www.youtube.com/watch?v=QLQ7VTZYrkY" },
        { name: "Until I Found You", artist: "Stephen Sanchez", lang: "English", url: "https://www.youtube.com/watch?v=GxldQ9eX2wo" }
    ],
    energetic: [
        { name: "The Middle", artist: "Zedd, Maren Morris, Grey", lang: "English", url: "https://www.youtube.com/watch?v=M3mJkSqZbX4" },
        { name: "Woman", artist: "Doja Cat", lang: "English", url: "https://www.youtube.com/watch?v=yxW5yuzVi8w" },
        { name: "Kala Chashma", artist: "Amar Arshi, Badshah, Neha Kakkar", lang: "Hindi", url: "https://www.youtube.com/watch?v=k4yXQkG2s1E" },
        { name: "Anmone 2", artist: "Aurthohin", lang: "Bangla", url: "https://www.youtube.com/watch?v=vWI2dkP4gh0" }
    ],
    relaxing: [
        { name: "Snooze", artist: "SZA", lang: "English", url: "https://www.youtube.com/watch?v=LDY_XyxBu8A" },
        { name: "Khayaal", artist: "Talwiinder", lang: "Hindi", url: "https://www.youtube.com/watch?v=GCvt9C4FLgA" },
        { name: "Lovely Day", artist: "Bill Withers", lang: "English", url: "https://www.youtube.com/watch?v=saEpkcVi1d4" },
        { name: "Love You Zindagi", artist: "Jasleen Royal", lang: "Hindi", url: "https://www.youtube.com/watch?v=bw7bVpI5VcM" },
        { name: "Tomake Chuye Dilam", artist: "Arijit Singh", lang: "Bangla", url: "https://www.youtube.com/watch?v=4haO6O4Expw" }
    ]
};

let currentMood = '';

// Login form handling
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const welcome = document.getElementById('welcome');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;
            const email = document.getElementById('email').value;
            localStorage.setItem('userName', name);
            // Store other details if needed, but only name used for welcome
            window.location.href = 'main.html';
        });
    }

    if (welcome) {
        const userName = localStorage.getItem('userName');
        welcome.textContent = `Welcome, ${userName}!`;
    }
});

// Show songs for selected mood
function showSongs(mood) {
    currentMood = mood;
    filterSongs();
}

// Filter and display songs based on language
function filterSongs() {
    const lang = document.getElementById('language').value;
    const songList = document.getElementById('songList');
    songList.innerHTML = '<h3>Songs for Your Mood</h3>';
    if (currentMood && songs[currentMood]) {
        let hasSongs = false;
        songs[currentMood].forEach(song => {
            if (lang === 'All' || song.lang === lang) {
                songList.innerHTML += `<p><a href="${song.url}" target="_blank">${song.name} by ${song.artist} (${song.lang})</a></p>`;
                hasSongs = true;
            }
        });
        if (!hasSongs) {
            songList.innerHTML += '<p>No songs found for this language.</p>';
        }
    }
}
