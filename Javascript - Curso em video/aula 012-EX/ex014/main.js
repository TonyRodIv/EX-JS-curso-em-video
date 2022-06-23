function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são exatamente ${hora}:${minutos} ⌚`
if(hora >= 0 && hora < 12){
    img.src= 'manhaft.png'

} else if (hora >= 12 && hora < 18){
    img.src= 'tardeft.png'
    document.body.style.background= '#be895f'
} else {
    img.src= 'noiteft.png'
    document.body.style.background= '#2a3a4d'
}
}