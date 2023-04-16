(() => {
  'use strict';
  function poll$() {
    setTimeout(() => {
      const timer = document.querySelector('.hud-timer-text');
      if (timer && timer.innerHTML !== '0:00') {
        const link = document.createElement('link');
        const URLCSS = chrome.runtime.getURL('init.css');
        link.rel = 'stylesheet';
        link.href = URLCSS;
        document.head.appendChild(link);
        const button = document.createElement('div');
        button.classList += 'streamer-mode-button-dfje3df3jn3132jo';
        button.innerHTML = 'Streamer HUD: OFF';
        button.addEventListener('click', () => {
          if (document.body.classList.contains('streamer-mode-on-sd3fjseqs23jf')) {
            document.body.classList.remove('streamer-mode-on-sd3fjseqs23jf');
            button.innerHTML = 'Streamer HUD: OFF';
          } else {
            document.body.classList.add('streamer-mode-on-sd3fjseqs23jf');
            button.innerHTML = 'Streamer HUD: ON';
          }
        });
        document.body.appendChild(button);
      } else {
        poll$();
      }
    }, 3000);
  }
  poll$();
})();
