// MOBILE MENU
function toggleMenu(){
  document.getElementById("mob").classList.toggle("open");
}

// JOB TOGGLE (FIXED)
function toggleJob(id){
  const body = document.getElementById(id);
  const toggle = document.getElementById("toggle-" + id);

  const isOpen = body.classList.contains("open");

  // close all
  document.querySelectorAll(".job-body").forEach(el=>{
    el.classList.remove("open");
  });

  document.querySelectorAll(".job-toggle").forEach(el=>{
    el.textContent = "+";
  });

  if(!isOpen){
    body.classList.add("open");
    toggle.textContent = "−";
  }
}

// SCROLL REVEAL
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});