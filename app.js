window.onload = () => {
    const button = document.querySelector('.button');
    button.addEventListener('click',calculateButton)

}

function calculateButton () {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height`;
        return;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight`;
        return;
    }

    const heightInMeter = height / 100;
    const bmi = ((weight / (heightInMeter*heightInMeter)).toFixed(2));
    if(bmi < 18.6 && bmi > 0){
        result.innerHTML = `Under Weight:${bmi}`;
    }
    else if(bmi > 18.6 && bmi < 24.9){
        result.innerHTML = `Normal Weight:${bmi}`;
    }
    else if(bmi>24.9){
        result.innerHTML = `Over Weight:${bmi}`;
    } 
}