document.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 80){
      el.style.opacity=1;
      el.style.transform="translateY(0)";
    }
  });
});
