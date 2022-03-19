gesture_1 = ""
gesture_2 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() { 
    Webcam.snap(function (data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'; }); 
}
console.log(ml5.verson);
clasifier = ml5.imageClasifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json",modelloded);
function modelloded() {
    console.log("modelloded");
}
function speak() {
    var synth = window.speachSynthesis;
}