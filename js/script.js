// Dark/Light Fix with localStorage
   const btn=document.querySelector(".toggle-btn");
   if(localStorage.getItem("theme")==="dark"){
   document.body.classList.add("dark");
   btn.textContent="☀️ Light";
   }
   function toggleTheme(){
   document.body.classList.toggle("dark");
   if(document.body.classList.contains("dark")){
    btn.textContent="☀️ Light";
    localStorage.setItem("theme","dark");
   } else {
    btn.textContent="🌙 Dark";
    localStorage.setItem("theme","light");
    }
   }
 
   document.getElementById('searchBox')
    .addEventListener('input',function(){
    const q=this.value.trim().toLowerCase();
    document.querySelectorAll('.card').forEach(card=>{
    const txt=card.innerText.toLowerCase();
    card.style.display = q && !txt.includes(q) ?
    'none' : '';
    });
   });

   // placeholder export action
   //(in real you could integrate jsPDF or site-wide export)
   function downloadAllPDFs(){
    alert
    ('To export: open any detail page and use its PDF export (or implement site-wide export).'); 
   }