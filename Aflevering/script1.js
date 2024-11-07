//Indeholder arrayet; albums, som indeholder flere objekter, men noget givent information knyttet til. 
//Hvert objekt repræsenterer et album, med egenskaber til.
//Egenskaberne for albummet er: Id, albumName, artistName, productionYear og en tracklist (array af objekter)

// data fra json fil !
const albums = [
    {
        id: 0,
        albumName: "Greatest hits",
        artistName: "ZZ-top",
        productionYear: 1992,
        trackList: [
            { trackNumber: 1, trackTitle: "Gimme all your lovin'", trackTimeInSeconds: 241 },
            { trackNumber: 2, trackTitle: "Sharp dressed man", trackTimeInSeconds: 256 },
            { trackNumber: 3, trackTitle: "Rough boy", trackTimeInSeconds: 290 },
            { trackNumber: 4, trackTitle: "Tush", trackTimeInSeconds: 135 },
            { trackNumber: 5, trackTitle: "My head's in Mississippi", trackTimeInSeconds: 261 },
            // alle tracks
        ]
    },
    {
        id: 1,
        albumName: "Wild Cherry",
        artistName: "Wild Cherry",
        productionYear: 1976,
        trackList: [
            { trackNumber: 1, trackTitle: "Play that funky music", trackTimeInSeconds: 300 },
            { trackNumber: 2, trackTitle: "The lady wants your money", trackTimeInSeconds: 251 },
            { trackNumber: 3, trackTitle: "99 1/2", trackTimeInSeconds: 178 },
            { trackNumber: 4, trackTitle: "Don't go near the water", trackTimeInSeconds: 196 },
            // alle trackss
        ]
    },
    {
        id: 2,
        albumName: "Meteora",
        artistName: "Linkin Park",
        productionYear: 2003,
        trackList: [
            { trackNumber: 1, trackTitle: "Foreword", trackTimeInSeconds: 14 },
            { trackNumber: 2, trackTitle: "Don't stay", trackTimeInSeconds: 188 },
            { trackNumber: 3, trackTitle: "Somewhere I belong", trackTimeInSeconds: 217 },
            { trackNumber: 4, trackTitle: "Lying from you", trackTimeInSeconds: 175 },
            // alle tracks
        ]
    },
    {
        id: 3,
        albumName: "Top Gun - motion picture soundtrack",
        artistName: "Various",
        productionYear: 1989,
        trackList: [
            { trackNumber: 1, trackTitle: "Danger zone", trackTimeInSeconds: 216 },
            { trackNumber: 2, trackTitle: "Mighty wings", trackTimeInSeconds: 231 },
            { trackNumber: 3, trackTitle: "Playing with the boys", trackTimeInSeconds: 240 },
            { trackNumber: 4, trackTitle: "Lead me on", trackTimeInSeconds: 228 },
            // alle tracks
        ]
    }
];


// funktion til albums med divs
function showAlbums(albums) {
    const container = document.getElementById('albums');
    
    albums.forEach(album => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        
        // info/toggle knap
        const header = document.createElement('div');
        header.classList.add('album-header');
        
        const albumInfo = document.createElement('p');
        albumInfo.textContent = `${album.albumName} by ${album.artistName} (${album.productionYear})`;
        
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Show Tracks';
        toggleButton.onclick = () => {
            trackListDiv.style.display = trackListDiv.style.display === 'none' ? 'block' : 'none';
            toggleButton.textContent = trackListDiv.style.display === 'none' ? 'Show Tracks' : 'Hide Tracks';
        };
        
        header.appendChild(albumInfo);
        header.appendChild(toggleButton);
        albumDiv.appendChild(header);
        
        // track list div
        const trackListDiv = document.createElement('div');
        trackListDiv.classList.add('track-list');
        
        album.trackList.forEach(track => {
            const trackItem = document.createElement('p');
            trackItem.textContent = `#${track.trackNumber} ${track.trackTitle} (${track.trackTimeInSeconds}s)`;
            trackListDiv.appendChild(trackItem);
        });
        
        albumDiv.appendChild(trackListDiv);
        container.appendChild(albumDiv);
    });
}

// Laver displayet
showAlbums(albums);
