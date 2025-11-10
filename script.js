// ===== ROLAGEM SUAVE =====
const links = document.querySelectorAll("nav a[href^='#']");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth"
      });
    }

    // Fecha o menu ao clicar (em telas pequenas)
    const navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      document.getElementById("menuToggle").classList.remove("open");
    }
  });
});

// ===== EFEITO DE FUNDO LEVE (PARTÍCULAS) =====
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;
canvas.style.pointerEvents = 'none';

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const particles = Array.from({ length: 40 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  r: Math.random() * 3 + 1,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5
}));

function animateParticles() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > width) p.dx *= -1;
    if (p.y < 0 || p.y > height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== MENU HAMBÚRGUER =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("open"); // adiciona classe pra animação ☰ → X
  });
}

// ===== ABRIR / FECHAR CHAT =====
document.addEventListener("DOMContentLoaded", () => {
  const buttonChat = document.getElementById("buttonChat");
  const paginaChat = document.getElementById("paginaChat");
  const fecharChat = document.getElementById("fecharChat");

  if (buttonChat && paginaChat && fecharChat) {
    buttonChat.addEventListener("click", () => {
      paginaChat.style.display = "flex";
      buttonChat.style.display = "none";
    });

    fecharChat.addEventListener("click", () => {
      paginaChat.style.display = "none";
      buttonChat.style.display = "flex";
    });
  } else {
    console.error("❌ Elementos do chat não encontrados!");
  }
});



