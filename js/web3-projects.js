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
  wallet:"<h4>Crypto Wallet</h4><p>Basic wallet UI & transaction screens.</p>",
  explorer:"<h4>Blockchain Explorer</h4><p>Search & view blockchain data.</p>",
  token:"<h4>Token DApp</h4><p>ERC-20 token interaction UI.</p>",
  nft:"<h4>NFT Minting</h4><p>NFT mint & gallery interface.</p>",
  defi:"<h4>DeFi Dashboard</h4><p>Staking, lending & rewards UI.</p>",
  dao:"<h4>DAO Voting</h4><p>Governance & proposal voting system.</p>"
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