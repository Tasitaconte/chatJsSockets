const infoContainer = document.getElementById("textContenedor");

function createData(text) {
    
    // create elements html
    const container = document.createElement("div");
    const namePerson = document.createElement("h6");
    const info = document.createElement("p");
    
    //add styles
    container.classList.add("infoChat");
    info.classList.add("textMensaje");
    
    //set data
    info.innerText = text;
    
    //add elements html in only container
    container.appendChild(namePerson);
    container.appendChild(info);
    infoContainer.appendChild(container);

}
