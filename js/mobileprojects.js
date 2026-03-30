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
  calculator:"<h4>Calculator App</h4><p>Basic mobile calculator UI.</p>",
  notes:"<h4>Notes App</h4><p>CRUD notes with local storage.</p>",
  weather:"<h4>Weather App</h4><p>Live weather using API.</p>",
  expense:"<h4>Expense Tracker</h4><p>Track income & expenses.</p>",
  chat:"<h4>Chat App</h4><p>Realtime Firebase chat.</p>",
  ecommerce:"<h4>E-Commerce App</h4><p>Mobile shopping app demo.</p>"
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