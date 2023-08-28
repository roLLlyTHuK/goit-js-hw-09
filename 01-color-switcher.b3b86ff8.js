!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body,d=null;t.disabled=!1,e.disabled=!0,
//! вмикаємо зміну кольору
t.addEventListener("click",(function(){d=setInterval((function(){var d="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));a.style.backgroundColor=d,t.disabled=!0,e.disabled=!1}),1e3)})),
//! вимикаємо зміну кольору
e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b3b86ff8.js.map
