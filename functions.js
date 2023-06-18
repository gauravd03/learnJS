//function is set of code tobe excuted or task to give outpu



//define and declearing function
function play(fname){
    console.log (fname+" "+"is playing")
}

play("gaurav");     // invoking function

//===>> gaurav is playing

//......................................................


//return keyword in functions
//return use to return something from function not print

//NOTE: using return keyword we need to console to calling function 
function sum(num1,num2){
    return num1+num2;
}

let result=sum(3,8)     // we store it in variable for clean and neat code

console.log(result);    
//==>> 11

//...............................................................

//we can also stored function in variable can call to it bye variable name

let a=function(c,g){
    return "sum is :" + c+g
}

console.log(a(5,5));


//...........................................
 
//function also can be defined using inbuild function constructor

//inbuild function constructor: called= function()


// var myfunc=new function("a" ,"b","return a*b");

// console.log(myfunc(8,8))

//...............................................................


//Function Expression
//Storing function in variable in call by variable name

let myfun=function multiply(a,b){
          return   a*b;
}

console.log(myfun(5,2))


//.......................................................................
//constructor functiojn=

// Object literal
const person = {
    name: 'John',
    age: 30,
  };
  
  // Constructor function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const john = new Person('John', 30);

  console.log(john);

const car = {
    this.color = "black",
    this.price = 100000;
}
console.log(car.color);
  
