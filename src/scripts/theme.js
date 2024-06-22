function theme() {
  const body = document.body;
  const logo = document.querySelector('.img-logo');
  const currentTheme = body.dataset.theme || 'light';

  if (currentTheme === 'light') {
    body.dataset.theme = 'dark';
    logo.src = '/static/images/inverted.png';
  } else {
    body.dataset.theme = 'light';
    logo.src = '/static/images/icon.png';
  }

  body.classList.toggle('dark-mode');
}
