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
  static:"<h4>Static Website</h4><p>Hosted on cloud storage.</p>",
  storage:"<h4>Cloud Storage App</h4><p>Upload & download files.</p>",
  deploy:"<h4>App Deployment</h4><p>VM based cloud deployment.</p>",
  serverless:"<h4>Serverless App</h4><p>Cloud functions demo.</p>",
  autoscale:"<h4>Auto Scaling</h4><p>Traffic-based scaling.</p>",
  monitor:"<h4>Monitoring System</h4><p>Logs & metrics dashboard.</p>"
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