function sobreClick(){
    document.getElementById("sobre").removeAttribute("display:none;")
    document.getElementById("habilidades").setAttribute("display:none;")
    document.getElementById("contato").setAttribute("display:none;")
}
function habiliClick(){
    document.getElementById("sobre").setAttribute("display:none;")
    document.getElementById("habilidades").removeAttribute("display:none;")
    document.getElementById("contato").setAttribute("display:none;")
}
function contatoClick(){
    document.getElementById("sobre").setAttribute("display:none;")
    document.getElementById("habilidades").setAttribute("display:none;")
    document.getElementById("contato").removeAttribute("display:none;")
}