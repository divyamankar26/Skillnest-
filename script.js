// Dark/Light toggle
const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === 'dark' ? '' : 'dark';
});

// Register PWA service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
