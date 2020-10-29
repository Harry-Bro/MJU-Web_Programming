let canvas = $("#canvas")[0];
let context = canvas.getContext("2d");
let radius = canvas.height / 2;

context.translate(radius, radius); // 개체의 위치를 Canvas 중심으로 mapping
radius = radius * 0.9; // 반지름의 크기 줄임

const drawClock = () => {
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
}

drawClock();