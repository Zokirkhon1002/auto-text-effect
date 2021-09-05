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

textSpeed.addEventListener('input',(e)=> speed = 300 / e.target.value)