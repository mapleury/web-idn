// JavaScript for interactive movement
const movingText = document.querySelector('.moving-text');
const section = document.querySelector('.interactive-section');

section.addEventListener('mousemove', (e) => {
  const { width, height } = section.getBoundingClientRect();
  const offsetX = (e.clientX / width - 0.5) * 100; // Normalize between -50 to 50
  const offsetY = (e.clientY / height - 0.5) * 50; // Normalize between -25 to 25
  
  // Apply movement and "denting" effect
  movingText.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY / 2}px)) scale(${1 - Math.abs(offsetX / 500)})`;
});
