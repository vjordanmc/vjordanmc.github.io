function sobreClick(){
    document.getElementById("sobre").style.display = "block"
    document.getElementById("habilidades").style.display = "none"
    document.getElementById("contato").style.display = "none"
}
function habiliClick(){
    document.getElementById("sobre").style.display = "none"
    document.getElementById("habilidades").style.display = "block"
    document.getElementById("contato").style.display = "none"
}
function contatoClick(){
    document.getElementById("sobre").style.display = "none"
    document.getElementById("habilidades").style.display = "none"
    document.getElementById("contato").style.display = "block"
}
function enviarEMail(){
    document.getElementById("enviarEmail").setAttribute("disabled")
    let nome  = document.getElementById("contatoNome").value
    let email = document.getElementById("contatoEmail").value
    let msg   = document.getElementById("contatoMsg").value

    /* SmtpJS.com - v3.0.0 */
    let Email = {
        send: function (a){
            return new Promise(function (n, e) {
                a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
                let t = JSON.stringify(a);
                Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
                    n(e)
                }
            )}
        )},
        ajaxPost: function (e, n, t){
            let a = Email.createCORSRequest("POST", e);
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            a.onload = function(){
                let e = a.responseText;
                null != t && t(e)
            },
            a.send(n)
        },
        ajax: function (e, n){
            let t = Email.createCORSRequest("GET", e);
            t.onload = function (){
                let e = t.responseText;
                null != n && n(e)
            },
            t.send()
        },
        createCORSRequest: function (e, n){
            let t = new XMLHttpRequest;
            return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
        }
    };

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vjordanmc@gmail.com",
        Password : "839f9afd-b5f9-4577-b51d-31d1b85293ac",
        To : "vjordanmc@gmail.com",
        // From : email,
        From : "vjordanmc@gmail.com",
        Subject : "Nova mensagem de: " + email,
        Body : nome + "<br>" + msg
    });
    alert("Email enviado.");
}