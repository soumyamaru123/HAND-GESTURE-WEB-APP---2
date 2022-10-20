var prediction = "";


Webcam.set({
    height:300,
    width:350,
    image_format : 'png',
    png_quality : 90
})
camera = document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ph1fHG_jz/model.json', modelLoaded);

function modelLoaded()
{
    console.log("Model loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "The prediction is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}