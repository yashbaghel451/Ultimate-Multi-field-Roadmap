const themeBtn=document.querySelector(".themeBtn");
if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark"); themeBtn.textContent="☀️ Light";}
function toggleTheme(){document.body.classList.toggle("dark"); if(document.body.classList.contains("dark")){themeBtn.textContent="☀️ Light"; localStorage.setItem("theme","dark");} else{themeBtn.textContent="🌙 Dark"; localStorage.setItem("theme","light");}}

// Demo modal data
const demos = {
  githubWorkflow: "<h4>GitHub Workflow Demo</h4><p>GitHub Actions setup tutorial: <a href='https://www.youtube.com/watch?v=R8_veQiYBjI' target='_blank'>YouTube</a></p>",
  dockerApp: "<h4>Docker App Demo</h4><p>Dockerize simple app: <a href='https://www.docker.com/get-started' target='_blank'>Official Guide</a></p>",
  jenkinsPipeline: "<h4>Jenkins Pipeline Demo</h4><p>CI/CD example: <a href='https://www.jenkins.io/doc/tutorials/' target='_blank'>Jenkins Docs</a></p>",
  k8sDeploy: "<h4>Kubernetes Deployment Demo</h4><p>Deploy app on K8s: <a href='https://kubernetes.io/docs/tutorials/' target='_blank'>K8s Tutorials</a></p>",
  terraform: "<h4>Terraform Demo</h4><p>Infrastructure as Code: <a href='https://learn.hashicorp.com/terraform' target='_blank'>HashiCorp Learn</a></p>",
  monitoring: "<h4>Monitoring Demo</h4><p>Prometheus + Grafana setup: <a href='https://prometheus.io/docs/alerting/latest/' target='_blank'>Prometheus Docs</a></p>"
};

const demoButtons = document.querySelectorAll(".demoBtn");
const modal = document.getElementById("demoModal");
const demoContent = document.getElementById("demoContent");
const closeModal = document.querySelector(".closeBtn");

demoButtons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    const key=btn.getAttribute("data-demo");
    demoContent.innerHTML=demos[key]||"Demo not available";
    modal.style.display="flex";
  });
});

closeModal.addEventListener("click",()=>modal.style.display="none");
window.addEventListener("click",e=>{if(e.target==modal)modal.style.display="none";});