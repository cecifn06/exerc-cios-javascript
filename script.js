
function carregar() {
    
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var boa = window.document.getElementById('boa')
var hora = 11


msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora< 12) {
    //bom dia
    boa.innerHTML = `Bom dia!`
    img.src = 'manha.png'
    document.body.style.background = '#FCF084'
}
 else if (hora >= 12 && hora < 18) {
    boa.innerHTML = `Boa tarde`
   img.src= "tarde.png"
   document.body.style.background = '#f78f3a'
} else {
    boa.innerHTML = `Boa noite`
    img.src = 'noite.png'
    document.body.style.background = '#15143b'
    document.getElementById('titulo').style.color = '#f3e6db'
}

}

