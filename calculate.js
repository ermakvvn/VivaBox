const calculate = function(width,depth,height) {
    const sideA = (height + height + width + height + height + 5);
    console.log(sideA);
    const sideB = (height + depth + height + depth + height + 5);
    console.log(sideB);
    let result = 0;
    let countBox = 0;
    if(sideA <= 100 && sideB <= 100){
        if(sideA >= sideB){ 
            countBox = Math.floor(200/sideB);
            result = `Цена коробки: ${Math.round(55/countBox * 2)} руб`;
        } 
        else{
        countBox = Math.floor(200/sideA);
        result =`Цена коробки: ${ Math.round(55/countBox * 2)} руб`;
        }
    } 
    else {
        result = 'Размер слишком большой. Убедитесь что вы ввели сантиметры, а не миллиметры'
    }

    if (sideA <= 50 && sideB <= 50){
       result = `Цена коробки: ${Math.round(result*0.72)} руб`;
    }
    console.log(
        `sideA = ${sideA}
         sideB = ${sideB}
         countBox = ${countBox}`)
return result;
}