window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main');
  setTimeout(() => {
    splash.classList.add('hidden');
    main.classList.remove('hidden');
  }, 2500);

  const buttons = document.querySelectorAll('.sidebar button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('main section').forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('show');
      });

      const target = document.getElementById(section);
      target.classList.remove('hidden');
      requestAnimationFrame(() => target.classList.add('show'));
    });
  });

  const suggestions = ['Song One', 'Song Two', 'Another Tune'];
  const musicInput = document.getElementById('music-search');
  const musicSuggestions = document.getElementById('music-suggestions');
  if (musicInput) {
    musicInput.addEventListener('input', () => {
      const q = musicInput.value.toLowerCase();
      musicSuggestions.innerHTML = '';
      if (!q) return;
      suggestions.filter(s => s.toLowerCase().includes(q)).forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        li.addEventListener('click', () => {
          musicInput.value = s;
          musicSuggestions.innerHTML = '';
        });
        musicSuggestions.appendChild(li);
      });
    });
  }
});

// Placeholder functions for future integrations
// - Groq API chat overlay
// - YouTube search and yt-dlp playback
// - Pinterest API image search
// - Google Drive PDF storage and editing
