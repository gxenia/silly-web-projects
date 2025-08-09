const initApp = () => {
    let numChar = document.getElementById("textArea").value.length;
    const maxNumChar = 200;
    document.getElementById("charCount").textContent = numChar + "/" + maxNumChar;

    document.getElementById("textArea").addEventListener("input", (event) => {
        let inputText = event.target.value;
        numChar = inputText.length;
        if (numChar >= maxNumChar) {
            textArea.classList.add("limit-reached");
            event.target.value = inputText.slice(0, maxNumChar);
            numChar = maxNumChar;
        } else {
            textArea.classList.remove("limit-reached");
        }
        console.log(numChar);
        document.getElementById("charCount").textContent = numChar + "/" + maxNumChar;
    })    
}

document.addEventListener("DOMContentLoaded", initApp);
