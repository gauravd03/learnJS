//premitive and non premitive 
//premitive =number, null, string, symbol, bigint, boolean, undefined
//non==   array, object 

//primitive==>


//1] number
let num=85;
console.log(typeof num);
//===>> number
//..............................

//2]null

let name=null
console.log(typeof name)
//===>>object
//...............................

//3]string

let naam="gaurav";
console.log(typeof naam)
//===>string

//................................
//BIgInt
let call=BigInt(98445262548484454282454542)
console.log(typeof call)
//===>>Bigint

//.................................

//Boolean
let x=true;
console.log("type of Boolean="+ typeof x)

//..................................

//non primitive

//objects

let student={

    fname:"gaurav",
    lname:"dandekar",
    fullname:`name is ${this.fname} ${this.lname}`
}

console.log("type of student object =" + typeof student)
