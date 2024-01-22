const input=document.getElementById("mesaj");
const button=document.getElementById("button");
const label=document.getElementById("afisare");

button.addEventListener("click", function Submit(){
    let msg=input.value;
    label.innerHTML=msg;
})