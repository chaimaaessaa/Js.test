var  plus = document.querySelector(".plus")
var count = document.querySelector("p")
 
plus.addEventListener("click", function(){
let num = parseInt(count.textContent)
num= num+1
count.textContent = num

});

var  moins = document.querySelector(".moins")
var count = document.querySelector("p")

moins.addEventListener("click", function(){
    let num = parseInt(count.textContent)
    if(num>0){
        num= num-1
    count.textContent = num
    }
    else {
        num=0
        count.textContent =num
    }

});