

//Mthods  in string


//NOTE: all string method return new value not change original value


//1] length property

var fname="gaurav"
console.log(fname.length)

//==> 6 
//..................................................

//2] toUpperCase()

var fname="gaurav dandekar"
console.log(fname.toUpperCase())

//==>> GAURAV DANDEKAR
//.................................................

//3]toLowerCase()

var fullname="Gaurav dandekar"
console.log(fullname.toLowerCase())

//.....................................................

//4]slice( ) it take argue=ment

fname="gaurav dandekar"
console.log(fname.slice(4,7))  
//NOTE:return 4 to 6 charactor
//===>>av
//.....................................................

//5]substr90

fname="gaurav dandekar"
console.log(fname.substr(4,7))
//NOTE: from 4th index it will star to count 0 to 7
// till 6 return
//==>> av dand

//............................................................

//6]replace()    but it only will replace first found charactor in strig
fname="gaurav dandekar"
console.log(fname.replace("a","h"))

//..............................................................

//7]replaceAll()
fname="gaurav dandekar"
console.log(fname.replaceAll("a","h"))
//Note : it will cahnge all maching word from string

//..........................................................

//8] trim()  trim methods use for remove white spacec from end and start of string

fname="            gaurav   dandekar  "
console.log(fname.trim())

//===>>gaurav     dandekar      NOTE:only staring and ending spceces are removed

//..............................................................

//9]trimStart()
fname="    gaurav dandekar      "
console.log(fname.trimStart())

//.....................................................................

//10]trimEnd()
fname="      gaurav dandekar       "
console.log(fname.trimEnd())


//..................................................

//pad string methods >> it pads methods with another string till satisfying given leangth

//11] padEnd()

fname="gaurav dandekar "
console.log(fname.padEnd(40,"o"))
//===>>gaurav dandekar oooooooooooooooooooooooo

//........................................................

//12]padStar() same as above only star from staring

//.....................................................

//13] charAt()
fname="gaurav dandekar"
console.log(fname.charAt(5))
//==>> v

//....................................................................

//14]split()  use for convert string to array 

fname="gaurav   sauracv mangesh vinay"
console.log(fname.split(" "))
//===>>gaurav', '', '', 'sauracv', 'mangesh', 'vinay']

//.................................................................
