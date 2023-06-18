const lengthC = document.querySelector('#LengthConv');
const volumeC = document.querySelector('#VolumeConv');
const massC = document.querySelector('#MassConv');
let inputNum = document.querySelector('#number-container');
let convBtn = document.querySelector('#conv-btn');

convBtn.addEventListener('click', function convert() {
    
    lengthC.innerHTML = "";
    volumeC.innerHTML = "";
    massC.innerHTML = "";


    let toBe = inputNum.value;
    let lengthChange = toBe * 3.281
    let volumeChange = toBe * 0.264
    let massChange = toBe * 2.204

    lengthC.innerHTML += `${toBe} meter(s) = ${lengthChange.toFixed(3)} feet`
    volumeC.innerHTML += `${toBe}  liter(s) = ${volumeChange.toFixed(3)} gallon(s)`
    massC.innerHTML += `${toBe} kilogram(s) = ${massChange.toFixed(3)} pound(s)`
})
