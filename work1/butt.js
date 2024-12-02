let count=0

document.getElementById("button").addEventListener("click",function a() {
    count++
    if(count==1){
        document.getElementById("button").style.backgroundColor="green"
    }
    else{
        document.getElementById("button").style.backgroundColor="white"
    }
})