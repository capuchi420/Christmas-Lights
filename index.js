var time = 1000;
var redLights = document.querySelectorAll('.lightR');
var greenLights = document.querySelectorAll('.lightG');
var blueLights = document.querySelectorAll('.lightB');

const setLightsOn = () => {
    redLights.forEach(el => {
        el.style.backgroundColor = 'red';
    });
    greenLights.forEach(el => {
        el.style.backgroundColor = 'green';
    });
    blueLights.forEach(el => {
        el.style.backgroundColor = 'blue';
    });
};

const setLightsOff = () => {
    redLights.forEach(el => {
        el.style.backgroundColor = '#444';
    });
    greenLights.forEach(el => {
        el.style.backgroundColor = '#444';
    });
    blueLights.forEach(el => {
        el.style.backgroundColor = '#444';
    });
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    time = +document.querySelector('input').value;
});

document.querySelector('#on').addEventListener('click', (e) => {
    setLightsOn();
});

document.querySelector('#off').addEventListener('click', (e) => {
    setLightsOff();
});


