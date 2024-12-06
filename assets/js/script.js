document.addEventListener('DOMContentLoaded', (event) => {
  const icons = document.querySelectorAll('.contact-icons');

  icons.forEach((icon, index) => {
    gsap.to(icon, {
      x: -15,
      duration: 1.2,
      repeat: -1,
      repeatDelay: 2,
      yoyo: true,
      ease: 'power2.inOut',
      delay: index * 0.5
    });
  });

  gsap.from('#title', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
  gsap.from('#description', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
  });

  // Staggered animation for list items
  gsap.from('.list-item', {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.3, // Time between animations for each item
    delay: 1 // Starts after the title and description animation
  });

  gsap.fromTo(
    '.edustore',
    {
      backgroundPosition: '0% 100%',
      filter: 'contrast(1) grayscale(1)'
    },
    {
      backgroundPosition: '200% 0%',
      duration: 3,
      ease: 'power1.inOut',
      filter: 'contrast(1.2) grayscale(0)',
      repeat: -1,
      yoyo: true
    }
  );
});
