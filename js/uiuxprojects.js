const themeBtn=document.querySelector(".themeBtn");
if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
  themeBtn.textContent="☀️ Light";
}
function toggleTheme(){
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    themeBtn.textContent="☀️ Light";
    localStorage.setItem("theme","dark");
  }else{
    themeBtn.textContent="🌙 Dark";
    localStorage.setItem("theme","light");
  }
}

const demos={
  landing:"<h4>Landing Page</h4><p>Modern marketing landing page UI.</p>",
  mobileui:"<h4>Mobile App UI</h4><p>Clean mobile app screens.</p>",
  dashboard:"<h4>Dashboard</h4><p>Analytics dashboard UI.</p>",
  ecommerce:"<h4>E-commerce UX</h4><p>Optimized shopping experience.</p>",
  casestudy:"<h4>UX Case Study</h4><p>End-to-end UX process.</p>",
  designsystem:"<h4>Design System</h4><p>Reusable UI components.</p>"
};

const modal=document.getElementById("demoModal");
const demoContent=document.getElementById("demoContent");

document.querySelectorAll(".demoBtn").forEach(btn=>{
  btn.onclick=()=>{
    demoContent.innerHTML=demos[btn.dataset.demo];
    modal.style.display="flex";
  }
});
document.querySelector(".closeBtn").onclick=()=>modal.style.display="none";
window.onclick=e=>{if(e.target===modal)modal.style.display="none";}