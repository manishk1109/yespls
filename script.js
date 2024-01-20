let no = document.querySelector(".noBtn");
let yes = document.querySelector(".yesBtn");

let x;
let y;

no.addEventListener('click',()=>{
     x = 5+  Math.random()*100;
     y = 10+ Math.random()*200;
    no.style.right = x + "px";
    no.style.bottom = y + "px";
    
})

yes.addEventListener('click',()=>{
    let please = document.querySelector('.middleimg');
    let title = document.querySelector('.title');
    please.src = 'thanks.gif';
        title.innerHTML = 'Ise bat pr kuch meetha ho jaye 🍫🌹' ;
    document.querySelectorAll('.')
})
