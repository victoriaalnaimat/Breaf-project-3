const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

const update = () => {
    circles.forEach((circle, i) => {
        i < currActive
            ? circle.classList.add("active")
            : circle.classList.remove("active");
    });

    const actives = document.querySelectorAll(".active");
    const width = ((actives.length - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${width}%`;


};

let currActive = 1;

next.addEventListener("click", () => {
    currActive++;

    if (currActive > circles.length) {
        currActive = circles.length;
    }
    update();
});
