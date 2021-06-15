canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
background_images_array = ["mars_image_1.jpg","mars_image_2.jpg","mars_image_3.jpg","mars_image_4.jpg"];

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

random_number = Math.floor(Math.random ()* 4);
console.log(random_number);

rover_image = "rover.png";
background_image = background_images_array[random_number];
console.log("Background image is " + background_image);

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = backgroundChange;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = roverChange;
    rover_imgTag.src = rover_image;
}

function backgroundChange() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function roverChange() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up key is pressed Rover's X = " + rover_x + "Rover's Y = " + rover_y);
        backgroundChange();
        roverChange();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When down key is pressed Rover's X = " + rover_x + "Rover's Y = " + rover_y);
        backgroundChange();
        roverChange();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When left key is pressed Rover's X = " + rover_x + "Rover's Y = " + rover_y);
        backgroundChange();
        roverChange();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("When right key is pressed Rover's X = " + rover_x + "Rover's Y = " + rover_y);
        backgroundChange();
        roverChange();
    }
}