// ===== SCROLL REVEAL FOR WHY REPLATE MATTERS =====
ScrollReveal().reveal('.impact-header h2', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 100,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.impact-header p', {
  origin: 'top',
  distance: '30px',
  duration: 1000,
  delay: 300,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.impact-card', {
  origin: 'bottom',
  distance: '60px',
  duration: 800,
  interval: 200,
  easing: 'ease-in-out'
});

// ===== COUNTER ANIMATION ON SCROLL =====
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    obj.innerText = value.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

// Trigger counter when section in view
const section = document.querySelector("#why-replate");
let counted = false;

window.addEventListener("scroll", () => {
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (!counted && sectionTop < screenHeight - 100) {
    animateValue("foodWasteCount", 0, 68, 1500);
    animateValue("ngoCount", 0, 8000, 1500);
    animateValue("hungryCount", 0, 189, 1500);
    counted = true;
  }
  
});
function toggleSound() {
  const video = document.getElementById("bgVideo");
  const button = document.getElementById("soundToggle");

  if (video.muted) {
    video.muted = false;
    button.textContent = "🔇";
  } else {
    video.muted = true;
    button.textContent = "🔈";
  }
}
