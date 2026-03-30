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
  password:"<h4>Password Checker</h4><p>Live password strength demo.</p>",
  keylogger:"<h4>Keylogger Awareness</h4><p>Educational key capture demo.</p>",
  phishing:"<h4>Phishing Awareness</h4><p>Fake vs real email training.</p>",
  scanner:"<h4>Vulnerability Scanner</h4><p>Basic security scanning tool.</p>",
  ids:"<h4>IDS</h4><p>Network intrusion detection demo.</p>",
  auth:"<h4>Secure Auth</h4><p>2FA & strong login demo.</p>"
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