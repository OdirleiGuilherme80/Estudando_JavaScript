/* Aula 12 estrtuturas condicionais: Neste exercicio usaremos a condição multipla por meio 
do SWITCH.
switch(expressão){
    case value:
        break;
Todo SWITCH tem um CASE todo case possui um break obrigatório, dentro parenteses do SWITCH
segue uma expressão e não um parâmetro.
O switch é para utilizarmos para casos pontuais se fosse para efetuar testes entre 0 a 7 
seria melhor utilizarmos o IF*/

    
var dia = new Date() //chamamos sempre um new Date na variavél anterior que vamos trabalhar.//
var diaSem = dia.getDay() //getDay para pegar o dia//

//diaSem =         //Tire as barras antes de diaSem se quiser forçar a variavél
                  //a receber número forçado de 0 a 100 e veja, se não forçar vai aparecer o dia da semana correto
                 // qual dia da semana aparece. 
                // Para vermos qual dia da semana será impresso no terminal

switch (diaSem) {
    case 0: 
        console.log('Domingo')
        break;
    
    case 1: 
        console.log('Segunda-Feira')
        break;
    
    case 2: 
        console.log('Terça-Feira')
        break;
    
    case 3: 
        console.log('Quarta-Feira')
        break;
    
    case 4:
        console.log('Quinta-Feira')
        break;
    
    case 5:
        console.log('Sexta-Feira, ops SEXTOUUUU!!')
        break;
    
        case 6:
            console.log('Sábado')
            break;
    default:
        console.log('[ERROR] ESSE DIA DA SEMANA NÃO EXISTE')
        break;
}