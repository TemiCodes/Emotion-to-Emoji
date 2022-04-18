Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpg",
    jpg_quality: 90
})
 var prediction1="yes"
 var prediction2="no"
camera=document.getElementById("camera")
Webcam.attach(camera)

function Take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='resul' src=" +data_uri+ ">"
        
    })
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W4UW9npdQ/model.json",modelloaded)
function modelloaded() {
    console.log("model loadedddddddddd")
    
}




function speak()
{
    var synth = window.speechSynthesis
    speakdata1 = "the first prediction is " +prediction1
    speakdata2 = " and the second prediction is " +prediction2
    var utterthis = new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)

    }
function Show(){
    img=document.getElementById("resul")
    classifier.classify(img,gotresult)


}
function gotresult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("result1").innerHTML = results[0].label
        document.getElementById("result2").innerHTML = results[1].label
        prediction1=results[0].label
        prediction2=results[1].label
        speak()
        if (prediction1 == "Sad") {
            document.getElementById("Emoji1").innerHTML = "&#128546;"
        }
        if (prediction1 == "Happy") {
            document.getElementById("Emoji1").innerHTML = "&#128522;"
        }
        if (prediction1 == "Angry") {
            document.getElementById("Emoji1").innerHTML = "&#128545;"
        }
        if (prediction2 == "Sad") {
            document.getElementById("Emoji2").innerHTML = "&#128546;"
        }
        if (prediction2 == "Happy") {
            document.getElementById("Emoji2").innerHTML = "&#128522;"
        }
        if (prediction2 == "Angry") {
            document.getElementById("Emoji2").innerHTML = "&#128545;"
        }
    }
}
