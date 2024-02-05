console.log('Javascript learn');
var fname="Gaurav";
console.log(fname);


const product={
    fname:"Gaurav",
    lname:"lala",
    add:"pune"
}

console.log(product);

console.log(product.fname);

product.fname="saurv";
console.log(product.fname);


let a=9;
let b=9;

console.log("a="+a);

let day="second";

if(day=="first"){
    console.log("monday");
}else if(day=="second"){
    console.log("tuesday");
}else if(day=="third"){
    console.log("wednesday");
}

let num=prompt("Enter number");

if(num%5==0){
    console.log("yes multiple");
}else{
    console.log("not multiple");
}

let marks=prompt("enter marks");

if(marks>80 && marks<100){
    console.log("Grade A");
}else if(marks>70 && marks<=89){
    console.log("Grade B");

}else if(marks>60 && marks<69){
    console.log("Grade c");
}else{
    console.log("fail");
}

for(let i=1; i<=5; i++){
    console.log("hi");
}

let k=1;
while(k<=5){
    console.log("hello");
    k++;
}
let m=1;
do{
    console.log("say");
    m++;
}while(m<=5);

for(let l=1; l<=100; l++){
    if(l%2==0){
        console.log(l);
    }
}

let count =0;

let str=(a)=>{
    for(let b of a){
        count++;
        console.log(b);
    }
}

str("gaurav");
console.log(count);