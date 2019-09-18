var gif;
var div;
var bgmusic;

function preload() {
    gif = createImg("assets/breatheanimated.gif", () => gif.size(innerWidth, innerHeight));
    bgmusic = loadSound("assets/music.wav");
}

function setup() {
    var canvasDiv = document.getElementById('bg');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.height;
    var sketchCanvas = createCanvas(width, height);
    console.log(sketchCanvas);
    noStroke();
    background('#444444');
}

function keyPressed() {
    
    if (keyCode === 77) {
        if (bgmusic.isPlaying()) {
            bgmusic.pause();
        }
        else {
            bgmusic.play();
        }
    }
}