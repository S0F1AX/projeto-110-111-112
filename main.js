// 

predction1=""
predction2=""

Webcam.set({
    width: 350,
    height: 300,
    imageFormat: 'png',
    pngQuality: 90,
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LVu3hiwGU/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é " + predction1;
    speakData2 = "A segunda previsão é " + predction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = results[0].label;
        document.getElementById("resultEmotionName2").innerHTML = results[1].label;
        predction1 = results[0].label;
        predction2 = results[1].label;
        speak();
        if(results[0].label == "joinha")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "spok")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128406";
        }
        if(results[0].label == "rock")
        {
            document.getElementById("updateEmoji").innerHTML = "&#129304;";
        }
        if(results[0].label == "tranquilo")
        {
            document.getElementById("updateEmoji").innerHTML = "&#129305;";
        }
        if(results[0].label == "paz")
        {
            document.getElementById("updateEmoji").innerHTML = "&#9996;";
        }
        if(results[1].label == "Joinha")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128077;";
        }
        if(results[1].label == "spok")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128406";
        }
        if(results[1].label == "rock")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#129304;";
        }
        if(results[1].label == "tranquilo")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#129305;";
        }
        if(results[1].label == "paz")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#9996;";
        }
    }
}
//&#128077; &#128406; &#129304; &#129305; &#9996;