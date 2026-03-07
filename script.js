const title = document.querySelector(".title")

let glow = 0

setInterval(()=>{

glow++

title.style.textShadow="0 0 "+glow+"px #7a5cff"

if(glow>40){

glow=0

}

},100)
