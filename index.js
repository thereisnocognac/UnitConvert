const lengthC = document.querySelector('#LengthConv');
const volumeC = document.querySelector('#VolumeConv');
const massC = document.querySelector('#MassConv');
let inputNum = document.querySelector('#number-container');
let convBtn = document.querySelector('#conv-btn');

convBtn.addEventListener('click', function convert() {
    
    let toBe = inputNum.value;
    let lengthChange = toBe * 3.281
    
    lengthC.innerHTML += `${lengthChange.toFixed(4)} is HERE!`
    volumeC.innerHTML += `${toBe} is HERE!`
    massC.innerHTML += `${toBe} is HERE!`
})