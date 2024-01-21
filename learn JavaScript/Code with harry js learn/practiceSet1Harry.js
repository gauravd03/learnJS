document.write("hey" );

//assign different data type value to existing
let str="gaurav"
console.log("string :"+ str)
str=34;
console.log("number added in string : "+str)   //->34  

//addition of different data type
let a=12;
let b="Gauragv";
console.log("adding int and string :"+ b+a)   //->Gaurav12

//use of type operator
console.log(typeof a)    //->number


//creating object  and manupulation
const obj={
    name:"gaurav",
    lname:"dandekar",
    age:24,
    occupation: "software engineer"

}

console.log(obj);  //whole object will print
console.log(obj['lname']);  //particular key print

obj.lname="nana";          //changing vlaue ofkey
console.log(obj['lname']);    //->nana 


//creating method inside obj and calling
let obj1={
    name:"Saurav",
    Lname:"Dandekar",
    age:34,
    college:"GHRCEM",
    detail : function(){
        return this.name +"  Last Name:  "+ this.Lname +" Age: "+this.age
    }
}

console.log(obj1.detail())    //mentioned properties will printed

