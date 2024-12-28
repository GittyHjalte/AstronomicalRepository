// Tager data fra albums.json (det som jeg havde glemt i først omgang)
fetch('albums.json') 
  .then(response => response.json()) // Konverter JSON-dataen til et format. (Så en video med det, kan ikke huske hvad den lærte metode var)
  .then(albums => {
    const container = document.getElementById('albums'); // Finder ud af hvor albummene skal vises på websiden
    
    // TTæller de albums som bliver vist
    let count = 0;

    // Gennemgår alle albums
    albums.forEach(album => {
      // Stoper hvis den har vist 4 albums
      if (count >= 4) {
        return;
      }

      // Laver en div til det her album
      const albumDiv = document.createElement('div');
      albumDiv.className = 'album'; // Klasse til styling

      // Tilføjer information om albummet (navn, artist og år), og appender child for album info overordnet.
      const albumInfo = document.createElement('p');
      albumInfo.textContent = `${album.albumName} af ${album.artistName} (${album.productionYear})`;
      albumDiv.appendChild(albumInfo);

      // Etablerer en knap til at vise/skjule tracks
      const toggleButton = document.createElement('button');
      toggleButton.textContent = 'Show tracks';
      albumDiv.appendChild(toggleButton);

      // Laver en div til at holde track-list, og skjule den i starten så den ikke er åbnet per automatik.
      const trackListDiv = document.createElement('div');
      trackListDiv.style.display = 'none'; // Skjuler tracks i starten
      album.trackList.slice(0, 4).forEach(track => {
        // Tilføjer alle tracks til tracklisten
        const trackItem = document.createElement('p');
        trackItem.textContent = `#${track.trackNumber} ${track.trackTitle} (${track.trackTimeInSeconds}s)`;
        trackListDiv.appendChild(trackItem);
      });
      albumDiv.appendChild(trackListDiv);

      // Når man klikker på knappen, så viser eller skjuler den tracklisten (havde lidt problemer - note: læs om onclick)
      toggleButton.onclick = () => {
        if (trackListDiv.style.display === 'none') {
          trackListDiv.style.display = 'block';
          toggleButton.textContent = 'Skjul numre';
        } else {
          trackListDiv.style.display = 'none';
          toggleButton.textContent = 'Show tracks';
        }
      };

      // Tilføjer albummet til siden (altså containeren)
      container.appendChild(albumDiv);

      // Opdaterer tælleren for hvor mange albums den har vist
      count++;
    });
  })
