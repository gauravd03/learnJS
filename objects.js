//objects in js
//in js without creating class we can create objects

//in js objects is collection of key-value pair

//three ways to create objects 

// 1]using object literal

const student={
    fname:"gaurav",
    lname:"dandekar"

}

console.log(student.fname);     //accesnig values



//adding  propertise in objects

student.class="ty a";          //property added

//updating propertis of objects
student.fname="priyanshu"      //property added

console.log(student);


//................................................................

//2]using new keyword 

var persons=new Object();  //object created

persons.name="saurav"   //adding properties
persons.lname="patil"

console.log(persons)  //accesing person


//..................................................................
//3] using object  constructor 

function details(naam,age){
    this.naam=naam,
    this.age=age

}

var studentinfo=details("lala",44);
console.log(studentinfo)

//...................................................................


//method in object
//in object we can add method to variable and can call by variable name
//adding method in object as value of key called method of object

var car={
    body:"steel",
    color:"black",
    cardetail: function(){
        return "bodytye  is:"+this.body+ "color is:"+this.color
    }
}

console.log(car.cardetail());

//.......................................................................

//nested object
//object can contain object as property value allowing for data structure

const members={
    naav:"gaurav",
    age:25,
    adress:{
        street:145 ,
        city:"mumbai",
        country:"india"
    }

}

console.log(members.adress.city)  //accessing property of inner object