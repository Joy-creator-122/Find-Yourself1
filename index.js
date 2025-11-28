// index.js - behavior for opening page: theme toggle, avatar picker, start transition
document.addEventListener('DOMContentLoaded', ()=>{
  const start = document.getElementById('start-btn');
  const avatarChoose = document.getElementById('avatar-choose');
  const popup = document.getElementById('avatar-popup');
  const avatarClose = document.getElementById('avatar-close');
  const avatars = document.querySelectorAll('.avatar');
  const themeToggle = document.getElementById('theme-toggle');

  // Start button: gentle scale then navigate
  start.addEventListener('click', (e)=>{
    start.classList.add('pulse');
    setTimeout(()=>{ window.location.href = 'test/tes.html'; }, 220);
  });

  // Theme toggle
  themeToggle && themeToggle.addEventListener('click', ()=>{
    if(window.FY && window.FY.toggleTheme) window.FY.toggleTheme();
  });

  // Avatar picker
  avatarChoose && avatarChoose.addEventListener('click', ()=>{ popup.classList.remove('hidden'); });
  avatarClose && avatarClose.addEventListener('click', ()=>{ popup.classList.add('hidden'); });
  avatars.forEach(btn => btn.addEventListener('click', ()=>{
    const emoji = btn.textContent.trim();
    if(window.FY && window.FY.saveAvatar) window.FY.saveAvatar(emoji);
    if(window.FY && window.FY.setAvatarElements) window.FY.setAvatarElements();
    popup.classList.add('hidden');
  }));

});
