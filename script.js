let title =document.querySelector('h1');
let sana =new Date();
title.innerHTML = `${sana.getHours()}: ${sana.getMinutes()}: ${sana.getSeconds()}`

setInterval(()=>{
    ShowTime();
},1000);