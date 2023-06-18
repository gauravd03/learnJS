//loops in js

//for loop ==>> for , for in , for of
//while loop
//do while loop


//............................................................
//1]for loop
//NOTE: initialization ==>condition==>body execute==>increment

for(let i=0; i<=5; i++){
    console.log(i)
}

//reverse numbers  decrement
for(let i=50; i>1; i--){
    console.log(i)
}


//sum of n numbers
let sum=0;
for(let i=1; i<5; i++){
    sum+=i;
}

console.log(sum)


//for loop for array
let fruits=["banan","mango","naral","kiwi"]

for(let i=0; i<=fruits.length; i++){
    console.log(fruits[i])
}
//..................................................................

// difference between for in and for of
//for...in loop iterates over the properties (keys) of an object.
//for...of loop iterates over the values of an iterable object. such as array,string,maps,set


//................................................................
// for in loop  use in object to get keys and values of objecgt
//for in loop also work with array 


// for in loop used to print keys and values of objects
console.log("for in loop")
const obj2={
    fname:"gaurav",
    lname:"dandekar",

}

for(let a in obj2){
    console.log(a)             //keys get
    console.log(obj2[a])       //values getting
}


//....................................................


//for of loop
//it is used to iterate over iterable objects such as array,string,maps,set

//for of in objects ==>>it return values pf objects

//for of on aray
const num=[45,85,4,25,24]

for(let b of num){
    console.log(b)      //values of iteratig 
}

//for of on string

gname="garuav"
for(let c of gname){
    console.log(c)
}




//............................................................................


//while loop

//intialization ===>> condition===>>increament

let i=0              // initializing iteration variable

while( i<=4){
    console.log("hello")
    i++;
}


//.............................................................

//do while loop

let a=0
do{
    console.log("hi")
    a++
}while(a<5)