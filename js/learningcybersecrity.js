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
  }else{
    btn.textContent="🌙 Dark";
     localStorage.setItem("theme","light");
  }
}