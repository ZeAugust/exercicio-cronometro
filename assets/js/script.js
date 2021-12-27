const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');

let timeInSeconds = 0;
let counter;

iniciar.addEventListener('click', cronometerInicialize);

function cronometerInicialize (){
    timer.style.color = 'black'
    clearInterval(counter);
    counter = setInterval(secondsCounter, 1000);
}

function secondsCounter(){
    ++timeInSeconds;
    const dateInMili = new Date(timeInSeconds * 1000);
    const cronometer = dateInMili.toLocaleTimeString('pt-BR',{
    hour12:false,
    timeZone: 'UTC',
    });
    timer.innerHTML = cronometer;
}

pausar.addEventListener('click', stopCounter);

function stopCounter(){
    timer.style.color = 'red';
    clearInterval(counter);
}

reiniciar.addEventListener('click', resetCronometer);

function resetCronometer(){
    clearInterval(counter);
    timer.style.color = 'black';
    timer.innerHTML = '00:00:00';
    timeInSeconds = 0;
}


