(function(){
    // ✅ Enter your public key here
    emailjs.init("  ");
  })();

  // ✅ Dark mode toggle
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

// ✅ EmailJS integration
document.getElementById("contact-form")
  .addEventListener("submit", function(event){
    event.preventDefault();

    //Enter your service_id and template_id here

    emailjs.sendForm("service_xyz","template_xyz",this)
      .then(function() {
        document.getElementById("statusMsg").innerText="✅ Message sent successfully!";
        document.getElementById("statusMsg").style.color="green";
      }, function(error) {
        document.getElementById("statusMsg").innerText="❌ Failed to send. " + error.text;
        document.getElementById("statusMsg").style.color="red";
      });
});