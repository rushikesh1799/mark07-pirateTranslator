var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURl(text) {
    return serverURL + "?" + "text=" + text;
}

async function handleClick() {
    // console.log(txtInput.value)

    if (txtInput.value == "") {
        alert(
            "Please enter the text/sentence that you want to translate to banana language"
        );
    } else {
        try {
            const res = await fetch(getTranslationURl(txtInput.value));
            const data = await res.json();
            if (res.status === 429) {
                throw new Error(data.error.message);
            }
            const translatedText = data.contents.translated;
            outputText.textContent = translatedText;
        } catch (err) {
            alert(err);
        }
    }
}

btnTranslate.addEventListener("click", handleClick);
