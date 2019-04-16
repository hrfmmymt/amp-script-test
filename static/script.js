const button = document.getElementById('hello');
button.addEventListener('click', () => {
  const el = document.createElement('h1');
  el.textContent = 'Hello World!';
  // `document.body` is effectively the <amp-script> element.
  document.body.appendChild(el);
});