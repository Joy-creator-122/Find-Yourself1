// global.js - helpers: theme toggle, avatar storage, small UI utilities
(function(){
  const THEME_KEY = 'fy_theme';
  const AVATAR_KEY = 'fy_avatar';

  function applyTheme(t){
    if(t === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
    try{ localStorage.setItem(THEME_KEY, t); } catch(e){}
  }

  function loadTheme(){
    const t = (localStorage.getItem(THEME_KEY) || 'light');
    applyTheme(t);
  }

  function toggleTheme(){
    const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(now === 'dark' ? 'light' : 'dark');
  }

  function saveAvatar(emoji){ try{ localStorage.setItem(AVATAR_KEY, emoji);}catch(e){} }
  function getAvatar(){ return localStorage.getItem(AVATAR_KEY) || '🙂'; }

  function setAvatarElements(){
    document.querySelectorAll('.fy-avatar').forEach(el=> el.textContent = getAvatar());
  }

  // export
  window.FY = window.FY || {};
  window.FY.toggleTheme = toggleTheme;
  window.FY.loadTheme = loadTheme;
  window.FY.saveAvatar = saveAvatar;
  window.FY.getAvatar = getAvatar;
  window.FY.setAvatarElements = setAvatarElements;

  document.addEventListener('DOMContentLoaded', ()=>{
    loadTheme();
    setAvatarElements();
  });
})();
