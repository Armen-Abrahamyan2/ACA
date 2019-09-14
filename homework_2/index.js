// ---------------------------------------- HOMEWORK_2 ----------------------------------------

// 1.

//// a. Print all number between 1 and 10.
//
// for (let a = 1; a <= 10; a++) {
//     console.log(a);
// }

//// b. Print all number between 1 and 10 except 6.
//
// for (let a = 1; a <= 10; a++) {
//     if (a === 6)  continue;
//     console.log(a);
// }

//// c. Print all even number between 1 and 10.
//
// for (let a = 1; a <= 10; a++) {
//     if (a % 2 !== 0)  continue;
//     console.log(a);
// }

//// d. Calculate sum of all numbers between 1 and 10 (using loop).
//
// let sum = 0;
//
// for (let a = 1; a <= 10; a++) {
//     sum += a;
// }
// console.log(sum);

//// e. Calculate sum of all numbers between 1 and 10 except 8.
//
// let sum = 0;
// for (let a = 1; a <= 10; a++) {
//     if (a === 8)  continue;
//     sum += a;
// }
//     console.log(sum);

//// f. Calculate sum of all odd numbers between 1 and 10.
//
// let sum = 0;

// for (let a = 1; a <= 10; a++) {              //variant 1
//     if (a % 2 === 0) continue;
//     sum += a;
// }
//  console.log(sum);

//// let a = 1;                                 //variant 2
//// while (a <= 10) {
////     if (a % 2 !== 0)
////     sum += a;
////     a++
//// }
////     console.log(sum);


//// g. Calculate sum of squares of all numbers between 1 and 10.
//
//  let sum = 0;
//
// for (let a = 1; a <= 10; a++) {
//     sum += a**2;
// }
//     console.log(sum);


//----------------------------------------------------------------------------------------------------------
// 2. Insert a digit and a number. Check whether the digits contains in the number or not.(don`t use string)

// function compare (num, dig) {
//     if (dig === 0 && num === 0){
//         console.log('Yes');
//         return;
//     }
//         if (num < 0){
//             num = -num;
//         }
//         if (dig < 0){
//             dig = -dig;
//         }
//
//     while (num)    {
//         const lastDigit = num % 10;
//
//             if(lastDigit === dig){
//                 console.log('Yes');
//                 return;
//             }
//
//         num = (num - lastDigit)/10;
//     }
//     console.log('No');
// }
//
// compare(-7884512, -8);


//----------------------------------------------------------------------------------------------------------
// 3. Enter a number. Reverse its first and last digits. Print the new number.

// function reverseFirstAndLastDigits(n) {
//     let isMinus = false;
//     if (n < 0) {
//         isMinus = true;
//         n = -n;
//     }
//     if (n < 10 || n % 10 === 0) {
//         console.log(isMinus ? -n : n);
//         return;
//     }
//     let nClone = n;
//     const newFirstDigit = nClone % 10;
//     nClone = (nClone - newFirstDigit) / 10;
//     let pow = 1;
//     while (nClone >= 10) {
//         pow *= 10;
//         nClone = (nClone - (nClone % 10)) / 10;
//     }
//     n = (n - newFirstDigit) / 10;
//     const middlePart = n % pow;
//     const newLastDigit = (n - middlePart) / pow;
//     const result = ((newFirstDigit * pow) + middlePart) * 10 + newLastDigit;
//     console.log(isMinus ? -result : result);
// }
//
// reverseFirstAndLastDigits(-40001);


//----------------------------------------------------------------------------------------------------------
// 4. Enter a number. Find the difference between its biggest and smallest digits.

// function difference(num) {
//     if (num === undefined) {
//         console.log('please input number');
//         return;
//     }
//     if (num === 0) {             // for effective code
//         console.log(0);
//         return;
//     }
//     if (num < 0) {
//         num = -num;
//     }
//     let max = 0;
//     let min = 10;
//     while (num) {
//         const lastDig = num % 10;
//         console.log(lastDig);
//         num = (num - lastDig) / 10;
//
//         if (lastDig < min) {
//             min = lastDig
//         }
//         if (lastDig > max) {
//             max = lastDig;
//         }
//     }
//     let dif = max - min;
//     console.log(dif);
// }
//
// difference(91919191);


//----------------------------------------------------------------------------------------------------------
// 5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

// function isPrime(n) {
//     if (n < 0) {
//         n = -n;
//     }
//     if(n !== 2 && n%2 === 0){
//         return (`No, ${n}`);
//
//     }
//
//     for (let i = 3; i <= (n / 3); i++) {
//         if (n % i === 0) {
//             return (`No, ${n}`);
//         }
//     }
//     return(`Yes, ${n}`)
// }

// for (let n = 0; ; n++) {
//     alert(isPrime(n));
// }


//----------------------------------------------------------------------------------------------------------
// 6. Given a number n ( n > 0 ). Print Fibonacci series up to n.

// function upToN(n) {
//     if (n === 0) {
//         console.log('0');
//         return;
//     }
//     let fib1 = 0;
//     let fib2 = 1;
//     let fibN;
//     let toN = "0, 1";
//     while (true){
//         fibN = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = fibN;
//         if (fibN <= n){
//             toN = toN + ", " + fibN;
//         } else break;
//     }
//     console.log(toN);
// }
//
// upToN(91);


//----------------------------------------------------------------------------------------------------------
// 7.  Write a recursive function to determine whether all digits of the number are odd or not.

// function isOdd(num) {
//     let lastDig = num%10;
//     if(num > 0 && num < 10 && num % 2 !== 0) {
//         return true;
//     } else if(lastDig%2 === 0){
//         return false;
//     } else {
//         return isOdd((num-lastDig)/10);
//     }
// }
//
// console.log(isOdd(1103561));


//----------------------------------------------------------------------------------------------------------
// 8. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․
// If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).

// function findeLongWord(str) {
//     let word = "";
//     let longest = "";
//     for (let i = 0; str[i] !== undefined; i++) {
//         if (str[i] !== " " && str[i] !== "," && str[i] !== "-") {
//             word = word + str[i];
//         } else {
//             str = str.substr(i, str.length - 1);
//             if (word.length >= longest.length) {
//                 longest = word;
//                 word = "";
//                 i = 0;
//             } else {
//                 word = "";
//                 i = 0;
//             }
//         }
//     }
//     console.log(longest);
// }
//
// findeLongWord("Merry christmas and happy new year!");


//----------------------------------------------------------------------------------------------------------
// 9. Write a function to find longest substring in a given a string without repeating characters except space character.
// If there are several, return the last one. Consider that all letters are lowercase.

/////////////////////////////   NOT FINISHED   ////////////////////////////

// function findLongestStr(str) {
//     let longest = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === undefined){
//             break;
//         }
//         let long = "";
//         for (let j = i + 1; j < str.length; j++){
//             if (str[j] === undefined){
//                 break;
//             } else if (str[i] !== str[j]){
//                 long = long + str[j];
//             } else if (str[i] === str[j]){
//                 if (long.length >= longest.length){
//                     longest = long;
//                 }
//                 break;
//             }
//         }
//         // console.log(long)
//     }
//     console.log(longest);
// }
//
// findLongestStr("asd fafdc");


//----------------------------------------------------------------------------------------------------------
// 10. Write a function, which receives two numbers as arguments and finds all numbersbetween them such that each digit
// of the number is even.The numbers obtained should be printed in a comma-separated sequence on a single line.

// function f(a, b) {
//     let str = "";
//     for( let j = a; j < b; j++){
//         a++;
//         let l = a.toString();
//         for (let i = 0;i <= l.length; i++){
//             if ((+l[i])%2 !== 0 && l[i] !== undefined){
//                 break;
//             } else if (+l[i]%2 === 0){
//                 continue;
//             } else {
//                 str = str + l + ", ";
//             }
//         }
//     }
//     if (str === ""){
//         console.log("Such numbers does not exist");
//         return;
//     }
//     console.log(str.slice(0,str.length-2))
// }
// f(17,113);



