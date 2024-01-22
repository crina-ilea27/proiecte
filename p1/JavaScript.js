const container= document.getElementById("container1");
const buton= document.getElementById("buton1");
let i=0;

buton.addEventListener("click", function(){
   let colors=["pink","blue","green","purple","red","yellow","brown","brightred"];
   container.style.backgroundColor= colors[i++];
   if(i>colors.length+1)
   i=0;

})