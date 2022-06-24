"use strict";
// Տնային 14 

// 1.Ստեղծում եք 3 հատ  առանձին nested loop, որոնց մեջ պետք ա լինի 1, 2, և 3 հատ loop` ըստ հերթականության, 
// ստեղծում եք FOR-ով և WHILE-ով

// for (let i = 1; i <= 5; i++) { //outer loop
//     console.log(`i=${i}-ի իտերացիայի արդյունքը`);
//     for (let j = 1; j < 5; j++) {
//         console.log(`j-ն հավասար է ${j}`);
//     }
// }

//Պյութագորասյան եռյակ
// for (let i = 1; i < 100; i++) {
//     for (let j = i + 1; j < 100; j++) {
//         for (let k = j + 1; k < 100; k++) {
//             if (k ** 2 === i ** 2 + j ** 2) {
//                 console.log(i, j, k);
//             }
//         }
//     }
// }

//  



// 2.ստեղծում եք function, որի մեջ switch-ով պետք ա ստեղծեք կալկուլյատոր + - / * % ի համար

// function calculator(num1, mathOp, num2) {
//     let result;
//     switch (mathOp) {
//         case '+':
//             result = num1 + num2;
//             console.log(`${num1} + ${num2} = ${result}`);
//             break;

//         case '-':
//             result = num1 - num2;
//             console.log(`${num1} - ${num2} = ${result}`);
//             break;

//         case '*':
//             result = num1 * num2;
//             console.log(`${num1} * ${num2} = ${result}`);
//             break;

//         case '/':
//             result = num1 / num2;
//             console.log(`${num1} / ${num2} = ${result}`);
//             break;

//         case '%':
//             result = num1 % num2;
//             console.log(`${num1} % ${num2} = ${result}`);
//             break;

//         default:
//             console.log("Սխալ է հայտնաբերվել,փորձեք կրկնել նորից");
//             break;
//     }
//     return result;
// }
// calculator(5, "+", 2);
// }
// calculator(5, "+", 2);