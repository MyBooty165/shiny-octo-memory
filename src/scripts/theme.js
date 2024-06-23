function theme() {
  const body = document.body;
  const logo = document.querySelector('.img-logo');
  const themeicon = document.querySelector('.theme-changer i');
  const currentTheme = body.dataset.theme || 'light';

  if (currentTheme === 'light') {
    body.dataset.theme = 'dark';
    logo.src = '/static/images/inverted.png';
    themeicon.classList.remove('fa-moon');
    themeicon.classList.add('fa-sun');
  } else {
    body.dataset.theme = 'light';
    logo.src = '/static/images/icon.png';
    themeicon.classList.remove('fa-sun');
    themeicon.classList.add('fa-moon');
  }

  body.classList.toggle('light-mode');
}
