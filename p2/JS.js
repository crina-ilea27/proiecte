//const container=document.getElementById("container1");
const buton=document.getElementById("buton1");

buton.addEventListener("click", function changeColor(){
    let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    let hexcode = '';
    for(let i = 0; i<6; i++){
        let random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[random_index];
      }
      document.getElementById("hex-code").innerHTML = hexcode;
      document.body.style.backgroundColor = '#' + hexcode;
})