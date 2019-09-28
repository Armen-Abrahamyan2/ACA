// 1)  Create a Rectangle class. Rectangle should have: length and width.
//     It should have getters and setters for all fields.
//     It should have getArea() method.
//     It should have getPerimeter() method.
//     It should have a toString method

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width
    }
    get area() {
        return this.length * this.width;
    }
    set area(value) {
        if(value > 0 && isNaN(value) === false )
        [this.length, this.width] = value.split(", ");
    }
    get perimeter() {
        return this.length * 2 + this.width * 2;
    }
    set perimeter(value) {
        [this.length, this.width] = value.split(", ");
    }
    toString() {
        console.log(`It is a rectangle`);
    }
}

const rectangle = new Rectangle('asa', 'asdd');
console.log(rectangle.area);


//----------------------------------------------------------------------------------------------------------------------
// 2)  Create an object called shape that has the type property and a getType() method.
//     Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle()
//     should have three properties — a, b, and c, representing the lengths of the sides of a triangle.
//     Add a new method to the prototype called getPerimeter()

const shape = {
    type: "triangle",
    getType() {
        return this.type;
    },
    getPerimeter() {
        return this.a + this.b + this.c
    },
};

Triangle.prototype = shape;

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

const triangle = new Triangle(1, 2, 3);
console.log(triangle.getPerimeter());


//----------------------------------------------------------------------------------------------------------------------
// 3.  Create an Author class and a Book class.
//    Author should have: name, email, gender.
//    It should have getters.
//    It should have a toString method.
//
//    Book should have: title, author(Author), price, quantity.
//    It should have appropriate getters and setters.
//    It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
//    It should have a toString method.

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    get info(){
        return `"name" ${this.name}, "email" ${this.email}, "gender" ${this.gender}`
    }
    set info(value){
        [this.name, this.email, this.gender] = value.split(", ");
    }

}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
    get profit(){
        return this.price * this.quantity;
    }
    set profit(value){
        [this.price, this.quantity] = value.split(", ");
    }
}

const book = new Book("Vendetto", new Author('Merelin Couper', "richardbach@gmail.com", 'female').info, 10, 800);
console.log(book);


//----------------------------------------------------------------------------------------------------------------------
// 4. What is output and why?

function test (name) {
    this.fullName = `My name is ${name}`;
    this.age = 5;
    return this.age;
}

// a)   new test(`Some Name`);             //  {fullName: "My name is Some Name", age: 5}
// b)   test(`Some Name`);           //  5

// a) no straight access to Function constructor because the test is already a function based on the constructor Function..
//    the "new test(...)" accesses the constructor Object
// b) the function has a concretely return value, and the value is taken from the functions despite the argument passed


//----------------------------------------------------------------------------------------------------------------------
// 5)  What is output and why?

function test (name) {
    this.fullName = `My name is ${name}`;
    this.age = 5;
    return {
        age: this.age
    };
}

// a )new test(’Some Name’);
// b)  test('Some Name’);       // {age: 5}

// b) the function has a concretely return value, and the value is taken from the functions despite the argument passed





