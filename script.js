const buttonCalculateCost = document.querySelector('button');
console.log(buttonCalculateCost);

const bannerHeader = document.querySelector('banner_header');
let i = 0;
const message = (e) =>{
    i++;
    switch(i) {
        case 1: 
        e.target.style.color = 'GreenYellow';
        break;
        case 2: 
        e.target.style.color = 'blue';
        break;
        case 3: 
        e.target.style.color = 'Violet';
        break;
        case 4: 
        e.target.style.color = 'Gold';
        break;
        default:
        e.target.style.color = 'red';
    }
    if(i === 6) {
        i = 0;
    }
}

buttonCalculateCost.addEventListener('click', message)
const link = document.querySelector('.mylink');
