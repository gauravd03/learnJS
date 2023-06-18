// Three types 
// 1]var   ==> Global scope ,redeclearable, reassignable
// 2]let  ==>  Block scope, reassignable , not redeclearable
// 2]const ==> Block scope, not redeclearable, not reassignable

//...................................................
// 1]var
var name="gaurav";
document.write(name)
 
// redeclear possible
var name="saurav"
console.log(name)

//reassign possible in var
name="sanket";
console.log(name)

//var global scope 
{var a=45;}
console.log(a)

//................................................
console.log(" var results")
//2]let 
let fnum=8;
console.log(fnum);

//redeclear not possible error will given as follow
//let fnum=85;

//ressign possible
fnum=85;
console.log(fnum)

//................................................

//3]const
const srt="acv";
console.log(srt);

//reassign not possible  error will given
//srt="hello";

//redeclearation not possible 
//const srt="hi";

//...............................................................
//in case of object or aaray you can change propertise of object but cannot creat same name type object


/*const student={
    fname:"gaurav",
    lname:"lala"
}
console.log(student.fname)

var student =45;    // error here because name of vriable same as constant objet
*/