// 1.Write a function, which receives an array as an argument which elements arrays of
//   numbers. Find biggest negative number of each array. Return product of that
//   numbers.If there is not any negative number in an array, ignore that one. Check that
//   items of the given array are arrays.

function findMaxNegProd(arr) {
    if ((arr.filter(item => Array.isArray(item))).length === 0) {
        console.log("Invalid argument");
        return;
    }
    const filterMinus = (arr.map(item => item.filter(item => item < 0)));
    const filterEmptyArr = filterMinus.filter(item => item.length !== 0);
    if (filterEmptyArr.length === 0) {
        console.log("No negatives");
        return;
    }
    const maxMinus = filterEmptyArr.map(item => Math.max.apply(null, item));
    const product = maxMinus.reduce((a,b) => a*b);
    console.log(product);
}

findMaxNegProd([[2, -9, -3, 0], [1,-2], [-4, -11, 0]]);


// ---------------------------------------------------------------------------------------------------------------------
// 2.Given an array of strings and numbers. Print the number of integers and the number
//   of strings in the array.

function countOfNumStr(arr) {
    const num = arr.filter(item => typeof (item) === "number").length;
    const str = arr.filter(item => typeof (item) === "string").length;
    console.log(`Numbers: ${num}, String: ${str}`);
}

countOfNumStr([1, 4, 'i am a string', '456']);


// ---------------------------------------------------------------------------------------------------------------------
// 3.Given an array consisting from the arrays of numbers (like a two-dimensional array).
//   Find sum of each row and print them as an array.

function sumOfEachRow(arr) {
    const sum = arr.map(item => item.reduce((a, b) => a + b));
    console.log(sum);
}

sumOfEachRow([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]);


// ---------------------------------------------------------------------------------------------------------------------
// 4.Given an array of integers. Write a function that return new array from first array,
//   where removed even numbers, and odd numbers was multiplied with new array length.

function oddMultLength(arr) {
    const oddFilter = arr.filter(item => item % 2 !== 0);
    const newArr = oddFilter.map(item => item * oddFilter.length);
    console.log(newArr);
}

oddMultLength([5, 4, 78, 0, -3, 7]);


// ---------------------------------------------------------------------------------------------------------------------
// 5.Given an array of numbers. Create an array containing only elements once.

function containOnce(arr) {
    const newArr = arr.filter((item, i, a) => a.indexOf(item) === i);
    console.log(newArr);
}

containOnce([1, 2, 3, 3, 2, 5, 'e', 'e']);


// ---------------------------------------------------------------------------------------------------------------------
// 6.Given an array. Create the array which elements are products between two neighbours.

function neightProdArr(arr) {
    const neighborsProduct = arr.map((item, index) => {return item * arr[index + 1]});
    const output = neighborsProduct.filter(item => !isNaN(item));
    console.log(output);
}

neightProdArr([3, 7, 12, 5, 20, 0] );


// ---------------------------------------------------------------------------------------------------------------------
// 7.Given an object. Invert it (keys become values and values become keys). If there is
//   more than key for that given value create an array.

function valueToKeyRev(data) {
    const obj = {};
    for(const [key, value] of Object.entries(data)) {
        if(Array.isArray(obj[value])) {
            obj[value].push(key);
        } else if(obj[value]) {
            obj[value] = [obj[value], key];
        } else {
            obj[value] = key;
        }
    }
    return obj;
}
console.log(valueToKeyRev({a: '1', b: "2", c: "2"}));


// ---------------------------------------------------------------------------------------------------------------------
// 8.Given an object. Write a function that creates a deep copy of it.

const a = { a: `1`, b: { a: 2} };
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}
const b = deepCopy(a);
a.b.a = 123;
console.log(b.b.a !== 123);