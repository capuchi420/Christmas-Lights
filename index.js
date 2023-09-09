var time = 1;
var redLights = document.querySelectorAll('.lightR');
var greenLights = document.querySelectorAll('.lightG');
var blueLights = document.querySelectorAll('.lightB');

const setLightsOn = () => {
    redLights.forEach(el => {
        el.style.backgroundColor = 'red';
        el.style.animation = `glowR ${time}s infinite`;
    });
    greenLights.forEach(el => {
        el.style.backgroundColor = 'green';
        el.style.animation = `glowG ${time + time}s infinite`;
    });
    blueLights.forEach(el => {
        el.style.backgroundColor = 'blue';
        el.style.animation = `glowB ${time + time + time}s infinite`;
    });
};

const setLightsOff = () => {
    redLights.forEach(el => {
        el.style.backgroundColor = '#444';
        el.style.animation = ``;
    });
    greenLights.forEach(el => {
        el.style.backgroundColor = '#444';
        el.style.animation = ``;
    });
    blueLights.forEach(el => {
        el.style.backgroundColor = '#444';
        el.style.animation = ``;
    });
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    time = +document.querySelector('input').value;
    document.querySelector('input').value = '';
    setLightsOn();
});

document.querySelector('#on').addEventListener('click', (e) => {
    setLightsOn();
});

document.querySelector('#off').addEventListener('click', (e) => {
    setLightsOff();
});


