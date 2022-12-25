
const inpChat = document.getElementById("textChat");
const btnPush = document.getElementById("pushMensaje")


//event of catch the data
btnPush.addEventListener("click", () => {
    textMensaje = inpChat.value
    if (textMensaje != "") {
        sendMensaje(textMensaje)
        inpChat.value = ""
    }
})