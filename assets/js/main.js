// Scroll Reveal
const revealElements = document.querySelectorAll('section, .tier, form, h1, h2, p, ul');
const revealOnScroll = () => {
  for(let el of revealElements){
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(top < windowHeight - 100){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'all 0.8s ease-out';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(50px)';
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Hero Particle Animation
const canvas = document.getElementById('heroCanvas');
if(canvas){
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  for(let i=0;i<100;i++){
    particles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*3+1,
      dx: (Math.random()-0.5)*0.5,
      dy: (Math.random()-0.5)*0.5
    });
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let p of particles){
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2,false);
      ctx.fillStyle='rgba(0,191,255,0.7)';
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;

      if(p.x<0||p.x>canvas.width) p.dx*=-1;
      if(p.y<0||p.y>canvas.height) p.dy*=-1;
    }
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
