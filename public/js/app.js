var socket = io.connect('http://localhost:3000/',{'forceNew':true})
//captura de etiquetas html
const inpChat = document.getElementById("textChat");
const infoContainer = document.getElementById("textContenedor")

socket.on('menssages',function(data){
    // console.log(data);
    createData(data)
})

async function getData() {
    text = await inpChat.value
    if (text != "") {
        socket.emit('new-menssage',text);
        inpChat.value = ""
    }
}

function createData(text) {
    // creacion de elementos html
    const container = document.createElement("div");
    const namePerson = document.createElement("h6");
    const info = document.createElement("p");
    //clases estilos
    container.classList.add("infoChat");
    info.classList.add("textMensaje");
    //seteo de datos a los elementos html
    info.innerText = text;
    //agrupación de los elementos html
    container.appendChild(namePerson);
    container.appendChild(info);
    infoContainer.appendChild(container);
}