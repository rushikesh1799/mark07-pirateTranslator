var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURl(text) {
    return serverURL + "?" + "text=" + text;
}

function handleClick() {
    // console.log(txtInput.value)
    fetch(getTranslationURl(txtInput.value))
        .then(response => response.json())
        .then(json => {
            console.log(json)
            // var translatedText = json.contents.translated;
            // outputDiv.innerText = translatedText;
        })
        .catch(err => console.log(err))

    // console.log("Clicked");
}

btnTranslate.addEventListener("click", handleClick)