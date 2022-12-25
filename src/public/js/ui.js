const infoContainer = document.getElementById("textContenedor");

const smsUI = (text) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="mt-2 infoChat"> 
        <p class="card card-body rounded-0">${text.mensaje}</p>
    </div>
    `;
    return div;
}

const renderSms = (text) => {
    infoContainer.innerHTML = "";
    text.forEach(sms => {
        infoContainer.append(smsUI(sms));
    });
    $("#textContenedor").animate({ scrollTop: $('#textContenedor')[0].scrollHeight }, 1000);
}