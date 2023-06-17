const lengthC = document.querySelector('#LengthConv');
const volumeC = document.querySelector('#VolumeConv');
const massC = document.querySelector('#MassConv');
let inputNum = document.querySelector('#number-container');
let convBtn = document.querySelector('#conv-btn');

convBtn.addEventListener('click', function convert() {
    
    let toBe = inputNum.value;
    let lengthChange = toBe * 3.281
    let volumeChange = toBe * 0.264
    let massChange = toBe * 2.204

    lengthC.innerHTML += `${lengthChange.toFixed(3)} is HERE!`
    volumeC.innerHTML += `${volumeChange.toFixed(3)} is HERE!`
    massC.innerHTML += `${massChange.toFixed(3)} is HERE!`
})