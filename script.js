const canvas=document.createElement("canvas")
document.getElementById("particles").appendChild(canvas)

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2
})
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

stars.forEach(s=>{
ctx.fillStyle="white"
ctx.fillRect(s.x,s.y,s.size,s.size)

s.y+=0.3

if(s.y>canvas.height)s.y=0
})

requestAnimationFrame(draw)

}

draw()
