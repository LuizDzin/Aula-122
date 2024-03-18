x = 0;
y = 0;
drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("start").innerHTML = "O sistema esta ouvindo, pode falar";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    
    document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content;
        if(content == "circulo") {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "Desenhando um circulo ";
            drawCircle = "set"; {
                rect(x,y,70,50);
                document.getElementById("status").innerHTML = "Um retangulo foi desenhado. ";
            }
        }
}