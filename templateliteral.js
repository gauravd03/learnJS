
//literals

//it helps to make string dynamic 
//we can pass variables value in strings

//using backtics and ${..} literals are created

let fname="gaurav"
let lname="dandekar"

let fullname=`my name is ${fname} ${lname}`
console.log(fullname)

//..........................................................

//in object function

const person={

    fname:"gaurav",
    lname:"dandekar",
    fullname:function (){
        return `name is ${this.fname} ${lname}`
    }
}
console.log(person.fullname())