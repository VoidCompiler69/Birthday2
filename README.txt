# A Little Birthday Mischief 🎀

## Run it
1. Extract the ZIP.
2. Open `index.html` in a browser, or open the folder in VS Code and use Live Server.
3. Internet is needed for the Google font and the six sample Unsplash photos.

## Add your own photos
In `index.html`, find the six `<article class="photo-card">` blocks. Replace each image's `src` with your own image path, for example:
`assets/photo-1.jpg`
Place your six photos inside the `assets` folder. Keep each quote in its matching `<p>` element.

## Add background music
Place an MP3 file named exactly `birthday-music.mp3` inside `assets/`.
The browser may block autoplay. Music starts after the first YES click (or the Music button), because browsers require a user interaction.

## Personalize
Edit the six quotes, page messages, and button labels directly in `index.html`.
This is a static front-end project (HTML, CSS, JavaScript); no backend is required.

## Photo pile interaction
The six photos are stacked like a deck. Click/tap the top photo or the Next memory button to flick it away and reveal the next photo and its quote. The deck loops back to the first photo after the sixth.
