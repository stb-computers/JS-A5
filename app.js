//Tanveer Ahmed  WM11684

//**************************
//******* CHAPTER-1 ********
//**************************

alert("Error! Please enter a valid passowrd.");
alert("Welcome to JS Land...\nHappy Coding!");
alert("Welcome to JS Land...");
alert("Happy Coding!\nPrevent this page from creating additional dialogs.");
console.log("Hello! I can run JS through my web browser's console.");


//**************************
//******* CHAPTER-2 ********
//**************************

var username;

var myName = "Tanveer Ahmed";

var message;
message="Hello World";
alert(message);

var StudentName = "Tanveer Ahmed";
var StudentAge = "23";
var Certification = "Certified Mobile Application Development";
alert(StudentName);
alert(StudentAge);
alert(Certification);

var product = "PIZZA";
alert(
    product.slice(0,product.length)+"\n"+
    product.slice(0,product.length-1)+"\n"+
    product.slice(0,product.length-2)+"\n"+
    product.slice(0,product.length-3)+"\n"+
    product.slice(0,product.length-4)+"\n"
    );

var email="tanveer3v@yahoo.com";
alert("My email address is " + email);

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

document.write("Yah! I can write HTML content through JavaScript.");

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");


//**************************
//******* CHAPTER-3 ********
//**************************

var age=25;
alert("I am "+age+" years old.");

var N=10;
alert("You have visited this site "+N+" times.");

var birthyear = 1992;
document.write("My birth year is "+birthyear+"<br>")
document.write("Data type of my declared variable is number")

var visitor = "Tanveer Ahmed"
var product="T-Shirt"
var qty=5
var website = "www.xyzClothing.com"
document.write (visitor+" ordered "+qty+" "+product+"(s)"+ " on "+website+".")


//**************************
//******* CHAPTER-4 ********
//**************************

document.write("<h3> Rules for naming JS Variables </h3>")
document.write("Variable names can only contain Numbers, $, and _. For example $my_1stVariable <br>")
document.write("Variables must begin with a Letter, $ and _. For example $name, _name or name <br>")
document.write("Variable names are case sensitive <br>")
document.write("Variable names should not be JS keywords ")

//**************************
//******* CHAPTER-5 ********
//**************************

//****1
var n1=3, n2=5, n3=n1+n2
alert(n3)

//****2
var n1=5, n2=3, n3=n1-n2
alert(n3)

var n1=5, n2=3, n3=n1*n2
alert(n3)

var n1=8, n2=4, n3=n1/n2
alert(n3)

//****3
var num
document.write("Value after variable declaration is: "+num) 
num=5
document.write("<br> Initial value: "+num) 
num++
document.write("<br> Value after increment is: "+num) 
num=num+7
document.write("<br> Value after addition is: "+num) 
num--
document.write("<br> Value after decrement is: "+num) 
num = num % 3 
document.write("<br> The remainder is : "+num) 

//****4
var price=600, qty=5
var amount=price*qty
document.write("Total cost to buy "+qty+" tickets to a movie is "+amount+"PKR")

//****5
var TableNo=4
document.write(
    TableNo + " X  1 = " + TableNo * 1 + "<br>"+
    TableNo + " X  2 = " + TableNo * 2 + "<br>"+
    TableNo + " X  3 = " + TableNo * 3 + "<br>"+
    TableNo + " X  4 = " + TableNo * 4 + "<br>"+
    TableNo + " X  5 = " + TableNo * 5 + "<br>"+
    TableNo + " X  6 = " + TableNo * 6 + "<br>"+
    TableNo + " X  7 = " + TableNo * 7 + "<br>"+
    TableNo + " X  8 = " + TableNo * 8 + "<br>"+
    TableNo + " X  9 = " + TableNo * 9 + "<br>"+
    TableNo + " X 10 = " + TableNo * 10
    )
 
//****6 

var Celsius=25
var Fahrenheit=(Celsius*9/5)+32
document.write(Celsius+"C is "+Fahrenheit+"F")
document.write("<br>")

var Fahrenheit=70
var Celsius=(Fahrenheit-32)*5/9
document.write(Fahrenheit+"F is "+Celsius+"C")


//****7
var price1=650,qty1=3,amount1=price1*qty1
var price2=100,qty2=7,amount2=price2*qty2
var shipping=100
document.write("Price of item 1 :"+ price1)
document.write("<br>Ordered quantity of item 1 :"+qty1)
document.write("<br>Price of item 2 :"+price2)
document.write("<br>Ordered Quantity of item 2 :"+qty2)
document.write("<br>Shipping charges :"+shipping)
var Total= (price1*qty1) + (price2*qty2) + shipping
document.write("<br>Total cost of your order is :" + Total)


//****8
var totalmarks = 980, marksobtained=804
var per=marksobtained/totalmarks*100
document.write("total marks " + totalmarks)
document.write("<br>marks obtained "+ marksobtained)
document.write("<br>percentage " + per + "%")


//**************************
//****** CHAPTER-6-9 *******
//**************************



//****1  
var a=10
document.write("The value of a is:" + a)
document.write("<br>-------------------------")
document.write("<br>The value of ++a is:" + ++a)
document.write("<br>Now the value of a is:" + a)
document.write("<br>The value of a++ is:" + a++)
document.write("<br>Now the value of a is:" + a)
document.write("<br>The value of --a is:" + --a)
document.write("<br>Now the value of a is:" + a)
document.write("<br>The value of a-- is:" + a--)
document.write("<br>Now the value of a is:" + a)


//****2  

var a=1,b=2

document.write("<br>a " + a)
document.write("<br>b " + b)
document.write("<br>--a " + --a)
document.write("<br>--b " +  --b)
document.write("<br>++b " +  ++b)
document.write("<br>b-- " +  b--)

//****3  
var name=prompt("Enter your name")
alert("Welcome "+name)

//****5  
function GenerateTable(TableNo=5){
    var i;
    for (i = 1; i < 11; i++) {
        document.write(TableNo + " X  " + i + " = " + TableNo * i + "<br>")
    }
}

GenerateTable(27)
GenerateTable()


//****6

var subj1="English",subj2="Urdu",subj3="Math"
var subjmarks=100
var mob1= +prompt("Obtained marks in " + subj1)
var mob2= +prompt("Obtained marks in "+ subj2)
var mob3= +prompt("Obtained marks in "+ subj3)

document.write("<Table>")
document.write("<th> Subject")
document.write("<th> Total Marks")
document.write("<th> Marks Obtained")
document.write("<th> Percentage")

document.write("<tr>")
document.write("<td>" + subj1)
document.write("<td>" + 100 )
document.write("<td>" + mob1)
var per1=mob1/100*100
document.write("<td>" + per1+"%")

document.write("<tr>")
document.write("<td>" + subj2)
document.write("<td>" + 100 )
document.write("<td>" + mob2)
var per2=mob2/100*100
document.write("<td>" + per2+"%")

document.write("<tr>")
document.write("<td>" + subj3)
document.write("<td>" + 100 )
document.write("<td>" + mob3)
var per3=mob3/100*100
document.write("<td>" + per3+"%")

var totalmarks = 300
var totalmob = +mob1 + mob2 + mob3
var avg = totalmob/3
document.write("<tr>")
document.write("<td>")
document.write("<td>" + totalmarks )
document.write("<td>" + totalmob)
document.write("<td>" + avg+"%")

document.write("</Table>")


//**************************
//****** CHAPTER 9-11 ******
//**************************

//****1

var city=prompt("Enter city name:")
if ( city == "Karachi") {
    document.write ("Welcome to city of light")
}


//****2
var gender = prompt("Enter your gender:")
if ( gender == "male") {
    document.write ("Good Morning Sir.")
} else if ( gender == "female")  {
    document.write ("Good Morning Ma'am.")
} else {
    document.write ("Good Morning")
}


//****3
var color = prompt("Enter color name:")
if ( color == "red") {
    document.write ("Must Stop")
} else if ( color == "orange")  {
    document.write ("Ready to move")
} else if ( color == "green")  {
    document.write ("Move Now")
} else {
    document.write ("Invalid color")
}


//****4
var fuelqty = prompt("Enter remaining fuel in your car:")
if ( fuelqty < 0.25 ) {
    document.write ("Please refill the fuel in your car")
}



//****5

var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");   // true condition
}

var b = 82; 
if (b++ === 83){ alert("given condition for variable b is true"); }  // false condition 

var c = 12; 
if (c++ === 13){ alert("condition 1 is true"); } // false condition
if (c === 13){ alert("condition 2 is true"); }  // true condition
if (++c < 14){ alert("condition 3 is true"); }  // false  condition
if(c === 14){ alert("condition 4 is true"); }   // true condition


var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  // true condition

if (true){ alert("True"); } 

if("car" < "cat"){ alert("car is smaller than cat"); }   //true condition


//****6

var subj1="English",subj2="Urdu",subj3="Math"
var subjmarks1=100,subjmarks2=100,subjmarks3=100

var mob1= +prompt("Obtained marks in "+ subj1 + " out of "+ subjmarks1)
var mob2= +prompt("Obtained marks in "+ subj2 + " out of "+ subjmarks2)
var mob3= +prompt("Obtained marks in "+ subj3 + " out of "+ subjmarks3)
var totalsubjmarks= (subjmarks1+subjmarks2+subjmarks3)
var totalmob = (mob1+mob2+mob3)

var per =  totalmob / totalsubjmarks * 100
var remarks=""
var grade=""
if (per >= 80) {
    grade = "A-one"
    remarks ="Excellent"
} else if (per >= 70) {
    grade = "A"
    remarks ="Good"
} else if (per >= 60) {
    grade = "B"
    remarks ="You need to improve"
} else {
    grade = "Fail"
    remarks ="Sorry"
}

document.write("<h2> Marks Sheet </h2>")
document.write("<br><br>")
document.write("<h4>Total Marks : " + totalsubjmarks + "</h4>")
document.write("<h4>Marks Obtained : " + totalmob + "</h4>")
document.write("<h4>Percentage : " + per + "%</h4>")
document.write("<h4>Grade : " + grade + "</h4>")
document.write("<h4>Remarks : " + remarks + "</h4>")


//****11

var num1 = +prompt("1st number :")
var op = prompt("operator =,-,* or / :")
var num2 = +prompt("2nd number :")
var result= 0
if (op === "+") {
    result=num1+num2
} else if (op === "-") {
    result=num1-num2
} else if (op === "*") {
    result=num1*num2
} else if (op === "/") {
    result=num1/num2
} else {
    alert("invalid operator")
}

alert (result)




//**************************
//****** CHAPTER 12-13 *****
//**************************

//****1

var char = prompt("Enter character here:")
if ( char.charCodeAt(0) >= 65 &&  char.charCodeAt(0) <=90 ) {
    alert("uppercase letter")
} else if ( char.charCodeAt(0) >= 97 &&  char.charCodeAt(0) <=122 ) {
    alert("lowercase letter")
}  else if ( char.charCodeAt(0) >= 48 &&  char.charCodeAt(0) <=57 ) { 
    alert("numeric")
}


//****2

var num1 = +prompt("enter 1st number:")
var num2 = +prompt("enter 2nd number:")

if (num1>num2) {
    alert(num1 + " is greater")
} else if (num2>num1) {
    alert(num2 + " is greater")
} else {
    alert(num1 + " and " + num2 + " are equal")
}

//****3

var num1 = +prompt("enter number:")

if (num1>0) {
    alert( "numer is possitive")
} else if (num1<0) {
    alert("number is negative")
} else {
    alert("number is zero")
}



//****4
var char = prompt("enter alphabate:")
char = char.toLowerCase()
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert("this is vowel")
} 


//****5
var correctpw="abc@123"
var pw1=prompt ("enter password")
var pw2=prompt ("re-enter password")

if (pw1 == pw2) {
    if (pw1 == correctpw ){
        alert("correct password")
    } else alert("incorrect password")

} else alert("passowrd mismatched")



//****6

var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}   else 
    greeting = "Good evening";

alert (greeting)


//****7

var time = +prompt("enter time (24 Hrs format) :")

if (time>=0 && time<1200) alert("Good Morning") 
else if (time>=1200 && time<1700) alert("Good Afternoon") 
else if (time>=1700 && time<2100) alert("Good Evening") 
else if (time>=2100 && time<2359) alert("Good Night") 


