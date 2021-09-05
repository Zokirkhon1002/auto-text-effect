let textInput = document.getElementById("textInput"),
    textOutput = document.getElementById("text"),
    textSpeed = document.getElementById("speed"),
    index = 1,
    speed = 300 / textSpeed.value;

textYoz();



function textYoz() {
    textOutput.innerHTML = textInput.value.slice(0,index);

    index ++;

    if(index > textInput.value.length){
        index = 1;
    }

    setTimeout(textYoz, speed);
}
nameSpeaker();
speedSpeaker();
textSpeed.addEventListener('input',(e)=> speed = 300 / e.target.value);

function nameSpeaker() {
      const firstName = textInput.value;
      const Speech = new SpeechSynthesisUtterance(firstName);
      Speech.volume = 2;
      Speech.rate = 1;
      Speech.pitch = 2;

      window.speechSynthesis.speak(Speech);
    }

    function speedSpeaker() {
        const tezlik = textSpeed.value;
        const Speech = new SpeechSynthesisUtterance("Speed: " + tezlik);
        Speech.volume = 2;
        Speech.rate = 1;
        Speech.pitch = 2;
  
        window.speechSynthesis.speak(Speech);
      }