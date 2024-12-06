const a=document.getElementById("num")

let count=0

document.getElementById("recape").addEventListener("click",function () {
    count=0
   a.innerHTML=count;
})
document.getElementById("increment").addEventListener("click",function () {
    count++
    a.innerHTML=count;
})
document.getElementById("decrement").addEventListener("click",function () {
    count--
    a.innerHTML=count;
})

