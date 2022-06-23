var agora = new Date()
var diaSem = agora.getDay()
switch(diaSem) {
        case 0:
            console.log('Domingo')
            break //é deveras importante usar o break para que o código não "quebre"
        case 1:
            console.log('Segunda')
            break
        case 2:
            console.log('Terça')
            break
        case 3:
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break
        case 5:
            console.log('Sexta')
            break
        case 6:
            console.log('Sábado')
            break
        default:
            console.log('[ERRO 507] DIA INVÁLIDO')

}