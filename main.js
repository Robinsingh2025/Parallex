function parallax(el, distance, speed) {
  const item = document.querySelector(el);

  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', () => {
  parallax('header', window.scrollY, 0.7);
  parallax('.big-rose', window.scrollY, 0.4);
  parallax('.small-rose', window.scrollY, 0.2);
});
