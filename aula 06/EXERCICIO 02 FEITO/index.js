//2. Qual é o valor da variável resultado ao final da execução do código? Encontre o
//valor sem executar o código.

let p = 8
let q = 4
let r = 2
let resultado = (p - q * r <= q) && (!(r ** 2 > p))

                // (8 - 4 * 2 <= 4 )&& (! (2** 2 > p))
                 //  ( 8 - 8 < = 4) && (! 4 > 8))
                    //    (0 > =4)  &&  ! false
                    //   true       &&      true 

                    // resultado= true

console.log('resultado', resultado)