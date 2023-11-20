const widthA = document.querySelector('.widthA');
const depthB = document.querySelector('.depthB');
const heightC = document.querySelector('.heightC');
const btnResult = document.querySelector('.banner_btn');
const outputResult = document.querySelector('.outputResult')

btnResult.addEventListener('click', function(){
    const a = Number(widthA.value);
    const b = Number(depthB.value);
    const c = Number(heightC.value);

    const result = calculate(a,b,c);

    outputResult.innerHTML = result;

})