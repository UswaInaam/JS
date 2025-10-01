
let a=0;
var b=5;
const c=10;

console.log("hello from js");
console.log(a)
document.getElementById("para").innerHTML=c;

let btn=document.querySelectorAll("button");

btn[0].addEventListener("click", () =>{
document.body.style.backgroundColor= "red";
});
btn[1].addEventListener("click", () =>{
document.body.style.backgroundColor= "green";
});
 btn[2].addEventListener("click", () => {
  document.body.style.backgroundColor="blue";
});
btn[3].addEventListener("click", () =>{
    document.body.style.backgroundColor="purple";
});
