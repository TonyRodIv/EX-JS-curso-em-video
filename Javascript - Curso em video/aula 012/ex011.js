var idade = 17
console.log(`você tem ${idade} anos.`)
if (idade < 16) {
    console.log('não vota')
} 
if (idade < 18 || idade >= 65){
    console.log('voto opcional')
} 
else {
    console.log('voto obrigatorio')
}
