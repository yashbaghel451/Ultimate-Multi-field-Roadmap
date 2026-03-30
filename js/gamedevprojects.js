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
  tictactoe:"<h4>Tic Tac Toe</h4><p>2-player logic-based game.</p>",
  snake:"<h4>Snake Game</h4><p>Classic snake gameplay.</p>",
  platformer:"<h4>Platformer</h4><p>2D jumping & obstacles.</p>",
  shooter:"<h4>Shooting Game</h4><p>2D shooter mechanics.</p>",
  multiplayer:"<h4>Multiplayer Game</h4><p>Online real-time gameplay.</p>",
  "3dgame":"<h4>3D Game</h4><p>Unity / Unreal based 3D game.</p>"
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