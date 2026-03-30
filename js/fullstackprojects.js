// Dark/Light mode
  const themeBtn=document.querySelector(".themeBtn");
  if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark"); themeBtn.textContent="☀️ Light";}
  function toggleTheme(){document.body.classList.toggle("dark"); if(document.body.classList.contains("dark")){themeBtn.textContent="☀️ Light"; localStorage.setItem("theme","dark");} else{themeBtn.textContent="🌙 Dark"; localStorage.setItem("theme","light");}}

  // Demo modal with links inside
  const demoButtons = document.querySelectorAll(".demoBtn");
  const modal = document.getElementById("demoModal");
  const demoContent = document.getElementById("demoContent");
  const closeModal = document.querySelector(".closeBtn");

  const demos = {
    portfolio: `<h4>Portfolio Demo</h4>
                <p>Example homepage layout with projects and contact form.</p>
                <p class="small">📌 GitHub: <a href="https://github.com/username/portfolio" target="_blank">Click here</a></p>`,
    taskmanager: `<h4>Task Manager Demo</h4>
                  <p>Add, complete and remove tasks interactively.</p>
                  <p class="small">📌 Demo video: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Watch</a></p>`,
    quiz: `<h4>Quiz Demo</h4>
           <p>Interactive question & scoring simulation.</p>
           <p class="small">📌 CodeSandbox: <a href="https://codesandbox.io/s/quiz-app-demo" target="_blank">Open</a></p>`,
    blog: `<h4>Blog Demo</h4>
           <p>CRUD operations with posts & comments example.</p>
           <p class="small">📌 GitHub: <a href="https://github.com/username/blog-platform" target="_blank">Click here</a></p>`,
    social: `<h4>Social Network Demo</h4>
             <p>Posts, likes, comments mini UI example.</p>
             <p class="small">📌 Video: <a href="https://www.youtube.com/watch?v=example3" target="_blank">Watch</a></p>`,
    chat: `<h4>Chat Demo</h4>
           <p>Real-time chat app simulation using WebSockets.</p>
           <p class="small">📌 Demo video: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Watch</a></p>`,
    ecommerce: `<h4>E-commerce Demo</h4>
                <p>Product listing, add-to-cart & checkout example.</p>
                <p class="small">📌 GitHub: <a href="https://github.com/username/ecommerce-store" target="_blank">Click here</a></p>`,
    collab: `<h4>Collab Demo</h4>
             <p>Multi-user live document editing simulation.</p>
             <p class="small">📌 Video: <a href="https://www.youtube.com/watch?v=example2" target="_blank">Watch</a></p>`
  };

  demoButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
      const key=btn.getAttribute("data-demo");
      demoContent.innerHTML=demos[key]||"Demo not available";
      modal.style.display="flex";
    });
  });

  closeModal.addEventListener("click",()=>modal.style.display="none");
  window.addEventListener("click",e=>{if(e.target==modal)modal.style.display="none";});