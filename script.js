// Simple scroll-to-top functionality
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    document.body.style.backgroundColor = "#e8f0fe";
  } else {
    document.body.style.backgroundColor = "#f4f4f4";
  }
});
