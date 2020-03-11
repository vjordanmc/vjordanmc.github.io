function doge(){
    let body = document.getElementById("body");
    let doge = document.createElement("div");
    let modal = document.createElement("div");
    let modalClose = document.createElement("div");
    let buttonClose = document.createElement("div");
    doge.id        = "doge"
    modal.id       = "modal";
    modalClose.id  = "modalClose"
    buttonClose.id = "buttonClose";
    modal.appendChild(doge);
    modal.appendChild(modalClose);
    modal.appendChild(buttonClose);
    body.appendChild(modal);
    document.getElementById('buttonClose').onclick = function(){
        document.getElementById("body").removeChild(modal);
    };
    document.getElementById('modalClose').onclick = function(){
        document.getElementById("body").removeChild(modal);
    };
}