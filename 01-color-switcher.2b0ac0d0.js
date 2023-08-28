const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.body;let a=null;e.disabled=!1,t.disabled=!0,
//! вмикаємо зміну кольору
e.addEventListener("click",(()=>{a=setInterval((()=>{const a=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;d.style.backgroundColor=a,e.disabled=!0,t.disabled=!1}),1e3)})),
//! вимикаємо зміну кольору
t.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.2b0ac0d0.js.map
