// Selecting the pointers
const secPointer = document.querySelector(".second-hand");
const minPointer = document.querySelector(".min-hand");
const hourPointer = document.querySelector(".hour-hand");

// Setting the initial position for the pointers
secPointer.style.transform = `rotate(${new Date().getSeconds() * 6}deg)`;
minPointer.style.transform = `rotate(${new Date().getMinutes() * 6}deg)`;
hourPointer.style.transform = `rotate(${new Date().getHours() * 30}deg)`;

// Initializing the time variables
let seconds, minutes, hours;

// Changing the pointer's position according to the time
const changePointersPosition = (timeVariable, timeFunction, DOMelement, rotationMultiplier) => {
    setInterval(() => {
        if(timeFunction === "getSeconds") timeVariable = new Date().getSeconds()
        else if(timeFunction === "getMinutes") timeVariable = new Date().getMinutes()
        else timeVariable = new Date().getHours();
        DOMelement.style.transform = `rotate(${timeVariable * rotationMultiplier}deg)`;
    }, 1000);    
};

changePointersPosition(seconds, "getSeconds", secPointer, 6);
changePointersPosition(minutes, "getMinutes", minPointer, 6);
changePointersPosition(hours, "getHours", hourPointer, 30);