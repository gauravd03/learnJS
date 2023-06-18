//arrays in js

//in js array can store any type of values , it can be mixed

//array creation
//two types : 
//1]using array literal
//2]using new keyword
//..........................................................

//1]using array literal    this type is recomended

const numbers=[4,2,5,4,]
 
const mixedarray=[1,"gaurav",85,true]

//2] using new keyword
const arr=new Array("lala","bhau")
console.log (arr)

//............................................................

//acessing array 

const num=[4,5,8,1]
console.log(num[0])    //output:4


//.........................................................................

//modefying elements

const str=["lala","gaurav","sauurav"]
str[1]="patil"       //element modified

console.log(str)

//.................................................................
//length property 
const arr8=[25,24,14]
console.log(arr8.length)

//............................................................

//acessing lst element of array
console.log(arr8[arr8.length-1])


//..........................................................

//toString()
//converting array to string

const arr1=["gaurav","lala","dada"]
console.log(arr1.toString())

//....................................................


//loops use to acees array
//for loop

const arr3=["name","dirname","kaka"]
for(let i=0; i<=arr3.length; i++){
    console.log(arr3[i])
}


//using for of loop

for(let n in arr3){
    console.log(arr3[n])
}