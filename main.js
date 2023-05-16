Webcam.set({
    image_format:"png",
    png_quality:90
 });
 
 camera=document.getElementById("camera");
 Webcam.attach(camera);
 
 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id="captured_img" src="'+ data_uri +'"/>';
 
     });
 }
 
 console.log('ml5 version',ml5.version);
 
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WDJaqMAiD/model.json',modelLoaded);

 function modelLoaded(){
    console.log("Model loaded");
 }

 function check(){
    img= document.getElementById('captured_img');
    classifier.classify(img, gotResult);
 }

 function gotResult(error, results){
    if (error){
        console.error(error);

    }
    else{
        console.log(results);
        document.getElementById("family_member").innerHTML=results[0].label
    }
 }