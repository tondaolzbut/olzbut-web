document.querySelectorAll('.hover-zone').forEach(zone => {
  zone.addEventListener('mouseenter', () => {
    const sprite = zone.parentElement;
    sprite.classList.remove('reverse');
    void sprite.offsetWidth;
    sprite.classList.add('play');
  });
  zone.addEventListener('mouseleave', () => {
    const sprite = zone.parentElement;
    sprite.classList.remove('play');
    void sprite.offsetWidth;
    sprite.classList.add('reverse');
  });
});