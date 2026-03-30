const themeBtn=document.querySelector(".themeBtn");
if(localStorage.getItem("theme")==="dark"){document.body.classList.add("dark"); themeBtn.textContent="☀️ Light";}
function toggleTheme(){document.body.classList.toggle("dark"); if(document.body.classList.contains("dark")){themeBtn.textContent="☀️ Light"; localStorage.setItem("theme","dark");} else{themeBtn.textContent="🌙 Dark"; localStorage.setItem("theme","light");}}

// Demo modal data
const demos = {
  pythonData: "<h4>Python Data Analysis Demo</h4><p>Try pandas & numpy example: <a href='https://github.com/username/python-data-analysis' target='_blank'>GitHub Repo</a></p>",
  titanic: "<h4>Titanic ML Demo</h4><p>Logistic Regression implementation: <a href='https://www.kaggle.com/c/titanic' target='_blank'>Kaggle Notebook</a></p>",
  stock: "<h4>Stock Prediction Demo</h4><p>Time Series LSTM example: <a href='https://github.com/username/stock-prediction' target='_blank'>GitHub Repo</a></p>",
  chatbot: "<h4>Chatbot NLP Demo</h4><p>Simple chatbot tutorial: <a href='https://www.youtube.com/watch?v=nlp-chatbot' target='_blank'>YouTube</a></p>",
  imageClass: "<h4>Image Classification Demo</h4><p>CNN model example: <a href='https://www.kaggle.com/cifar-10' target='_blank'>Kaggle</a></p>",
  recommender: "<h4>Recommender System Demo</h4><p>Python collaborative filtering project: <a href='https://github.com/username/recommender-system' target='_blank'>GitHub Repo</a></p>"
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