var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}

    Webcam.attach(camera) 

camera = document.getElementById("camera");
Webcam.set({
    width:"500",
    height:"400",
    image_format : 'jpeg',
    jpeg_quality:"90"
});
function speak(){
    var synth=window.speechSynthesis 
    speak_data = "Taking your Selfie in 7 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data) ;
    synth.speak(utterthis)
    
    setTimeout(function()
    {
       img_id="selfie1";
        take_snapshot(); 
        speak_data = "Taking your Selfie in 7 seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data) ;
        synth.speak(utterthis)  
    },7000);
    
}
function speak(){
    var synth=window.speechSynthesis 
    speak_data = "Taking your Selfie in 10 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data) ;
    synth.speak(utterthis)
    setTimeout(function()
    {
       img_id="selfie2";
        take_snapshot(); 
        speak_data = "Taking your Selfie in 10 seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data) ;
        synth.speak(utterthis)  
    },10000);
    
}
function speak(){
    var synth=window.speechSynthesis 
    speak_data = "Taking your Selfie in 13 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data) ;
    synth.speak(utterthis)
    setTimeout(function()
    {
       img_id="selfie3";
        take_snapshot(); 
        speak_data = "Taking your Selfie in 13 seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data) ;
        synth.speak(utterthis)  
    },15000);
    
}
function take_snapshot(){
    console.log(img_id);
    
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML= "<img id='selfie1' src="+data_uri+">"
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML= "<img id='selfie2' src="+data_uri+">"
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML= "<img id='selfie3' src="+data_uri+">"
        
        }
        if(img_id=="selfie4"){
            document.getElementById("result4").innerHTML= "<img id='selfie4' src="+data_uri+">"
        
        }
        if(img_id=="selfie5"){
            document.getElementById("result5").innerHTML= "<img id='selfie5' src="+data_uri+">"
        
        }
    }) 

}
