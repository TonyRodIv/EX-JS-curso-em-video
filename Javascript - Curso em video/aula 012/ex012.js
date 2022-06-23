var sysdat = new Date()
var hora = sysdat.getHours()
console.log(`agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('bom dia!')
}else if(hora <= 18){
    console.log('boa tarde!')
}else{
    console.log('boa noite!')
} //não tony, não da pra usar "if if if" quando se usa intervalos, para isso tem q usar o if, else if, else.
 // e pare de usar "if if if" e comece a usar o switch