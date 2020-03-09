function doge(){
    let body = document.getElementById("body");
    let doge = document.createElement("div");
    let modal = document.createElement("div");
    let buttonClose = document.createElement("div");
    doge.id = "doge"
    modal.id = "modal";
    buttonClose.id = "buttonClose";
    modal.appendChild(doge);
    modal.appendChild(buttonClose);
    body.appendChild(modal);
    document.getElementById('buttonClose').onclick = function(){
        document.getElementById("body").removeChild(modal);
    };
}