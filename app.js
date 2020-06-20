            //   CHAPTER 21-25 TASK 1  
var firstName=prompt("Enter your First name")
var lastName=prompt("Enter your Last name")
var fullName=firstName+" "+lastName
alert("Good morning "+fullName)

            //   CHAPTER 21-25 TASK 2
var favPhone=prompt("Enter your favourite mobile phone model")
document.write("My favourite phone is "+favPhone+"<br> Length of string: "+favPhone.length)  

            //   CHAPTER 21-25 TASK 3
var a="Pakistani"
document.write("String: "+a+"<br>Index of 'n': "+a.indexOf("n"))

            //   CHAPTER 21-25 TASK 4
var a="Hello World"
document.write("String: "+a+"<br>Last index of 'l': "+a.lastIndexOf("l"))

            //   CHAPTER 21-25 TASK 5
var a="Pakistani"
document.write("String: "+a+"<br>Character at index 3:"+a[3])

            //   CHAPTER 21-25 TASK 6
var firstName=prompt("Enter your First name")
var lastName=prompt("Enter your Last name")
var res = firstName.concat(lastName);
document.write(res)

            //   CHAPTER 21-25 TASK 7
var city="Hyderabad"
var a=city.replace("Hyder","Islam")
document.write("City: "+city+"<br>After replacement: "+a)

            //   CHAPTER 21-25 TASK 8
var message = "Ali and Sami are best friends. They play cricket and football together."
var a=message.replace(/and/g,"&")
document.write(a)

            //   CHAPTER 21-25 TASK 9
var a="472"
var b=parseInt(a)
document.write("Value: "+a+"<br>Type: "+typeof(a)+"<br>Value: "+a+"<br>Type: "+typeof(b))

            //   CHAPTER 21-25 TASK 10
var a=prompt("Enter some text in lowercase")
document.write(a.toUpperCase())

            //   CHAPTER 21-25 TASK 11
var a=prompt("Enter the text")
var b=a.charAt(0)
var c=b.toUpperCase()
document.write(c+""+a.slice(1))

            //   CHAPTER 21-25 TASK 12
var num = 35.36
var con=num.toString()
var s=con.replace(".","")
document.write("Number: "+num+"<br>Result: "+s)

            //   CHAPTER 21-25 TASK 13
var userName=prompt("Enter a username")
var flag=0
for (var i=0;i<userName.length;i++){
    if(userName[i]==="@" || userName[i]==="." || userName[i]==="," || userName[i]==="!"){
        flag=1
        break
    }
}
if(flag===1){
    alert("Please enter a valid username\nPrevent this page from creating additional dialogs")
}
else{
   alert("hello "+userName)
}

            //   CHAPTER 21-25 TASK 14
var flag=0
var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var search=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am")
var arr=search.toLowerCase()
for (var i=0;i<a.length;i++){
    if(arr===a[i]){
        flag=1
        break
    }
}
if (flag===1){
    alert(arr+" is avaliable at index "+i+" in our bakery\nPrevent this page from creating additional dialogs")
}
else{
    alert("We are sorry. "+arr+" is not avaliable in our bakery\nPrevent this page from creating additional dialogs")
}

            //   CHAPTER 21-25 TASK 15
var pass=prompt("Enter your password")
a=pass.charAt(0)
if (a==="1" || a==="2" || a==="3" || a==="4" || a==="5" || a==="6" || a==="7" || a==="8"|| a==="9"){
    alert("Password can not begin with a number Please enter a valid password")
}
else if (pass.length<6){
    alert("Password at least 6 character long Please enter a valid password")
}


            //   CHAPTER 21-25 TASK 16
var university = "University of Karachi"
var res = university.split("");
for (var i=0;i<res.length;i++){
    document.write(res[i]+"<br>")
}

            //   CHAPTER 21-25 TASK 17
var a=prompt("enter someting")
var b=a.charAt(a.length-1)
document.write("User input: "+a+"<br>Last character of input: "+b)

            //   CHAPTER 21-25 TASK 18
var t="The quick brown fox jumps over the lazy dog"
var a=t.toLowerCase()
var count=0
for(i=0;i<a.length;i++){
    if(a.slice(i,i+3)==="the"){
        count=count+1
    }
}
document.write("Text: "+t+"<br>There are "+count+" occurence(s) of word 'the'")

            //   CHAPTER 26-30 TASK 1
var a=+prompt("Enter any positive integer")
document.write("number: "+a+"<br>round off value: "+Math.round(a)+"<br>floor value: "+Math.floor(a)+"<br>ceil value: "+Math.ceil(a))

            //   CHAPTER 26-30 TASK 2
var a=+prompt("Enter any negative floating point number")
document.write("number: "+a+"<br>round off value: "+Math.round(a)+"<br>floor value: "+Math.floor(a)+"<br>ceil value: "+Math.ceil(a))

            //   CHAPTER 26-30 TASK 3
var a=-4
document.write("The absolute value of "+a+" is "+Math.abs(a))

            //   CHAPTER 26-30 TASK 4 
var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write("random dice value: " + diceRoll);

            //   CHAPTER 26-30 TASK 5
var toss = Math.ceil( Math.random() * 2 );
if (toss===1){
    document.write(toss+"<br>random coin value: Tails")
}
else {
    document.write(toss+"<br>random coin value: Heads")
}

            //   CHAPTER 26-30 TASK 6
var ran=Math.ceil(Math.random()*100)
document.write("random number between 1 and 100: "+ran)

            //   CHAPTER 26-30 TASK 7
var wei=prompt("Enter your weigths")
document.write("The weight of user is "+wei+" kilograms")

             //   CHAPTER 26-30 TASK 8
var a=Math.ceil(Math.random()*10)
var sc=+prompt("Enter a number between 1 and 10")
if(sc===a){
    alert("Congrats you guess right number")
}
else{
    alert("Try again\nPrevent this page from creating additional dialogs ")
}

             //   CHAPTER 31-34 TASK 1
var a=new Date()
document.write(a)

             //   CHAPTER 31-34 TASK 2
var month=["January","February","March","April","May","June","July","August","September","October","November","December"]
var a=new Date()
var b=a.getMonth()
document.write("Current month: "+month[b])

             //   CHAPTER 31-34 TASK 3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var a=new Date()
d=a.getDay()
document.write("Today is "+dayNames[d])

             //   CHAPTER 31-34 TASK 4
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var a=new Date()
d=a.getDay()
if(dayNames[d]==="Sat" || dayNames[d]==="Sun"){
    document.write("It's Fun day")
}
else{
    document.write("Not a Fun day")
}

             //   CHAPTER 31-34 TASK 5
var a=new Date()
var b=a.getDate()
if(b<16){
    document.write("First fifteen days of the month")
}
else{
    document.write("Last days of the month")
}

             //   CHAPTER 31-34 TASK 6
var d=new Date()
var t=d.getTime()
var min=t/(1000*60)
document.write("Current Date: "+d+"<br>Elapsed milliseconds since January 1,1970: "+t+"<br>Elapsed minutes since January 1,1970: "+min)

             //   CHAPTER 31-34 TASK 7
var a=new Date()
var b=a.getHours()
if (b<12){
    document.write("Its AM")
}
else{
    document.write("Its PM.")
}
             //   CHAPTER 31-34 TASK 8

var laterDate=new Date("31 Dec,2020")
document.write(laterDate)
             //   CHAPTER 31-34 TASK 9
var b=new Date("May 6, 2020")
var c=b.getTime()
var a=new Date()
var d=a.getTime()
var diff=d-c
var cal=Math.floor(diff/(1000*60*60*24))
document.write(cal+" days have passed since 1st Ramadan,2020<br> 1st Ramadan was on May 6,2020")

             //   CHAPTER 31-34 TASK 10
var a=new Date("Jan 1,2020")
var b=new Date()
var c=a.getTime()
var d=b.getTime()
var diff=d-a
var min=(diff/(1000*60))
document.write("On reference date "+b+"<br>"+min.toFixed(2)+" seconds had passed since beginning of 2020")
             //   CHAPTER 31-34 TASK 11
var a=new Date()
var b=new Date()
var c=b.setHours(a.getHours()-1)
document.write("current date: "+a+"<br>1 hour ago, it was "+b)

             //   CHAPTER 31-34 TASK 12
var a=new Date()
var b=new Date()
var c=b.setFullYear((a.getFullYear()-100))
document.write("current date: "+a+"<br>100 years back, it was "+b)
             //   CHAPTER 31-34 TASK 13
var age=+prompt("Enter your age")
var a=new Date()
var b=a.getFullYear()
document.write("Your age is "+age+"<br>Your birth year is "+(b-age))

             //   CHAPTER 31-34 TASK 14
var name="Bilal"
var mon="June"
var units=300
var charPerUnit=16
var netAmoDueDate=units*charPerUnit
var lateAmouChar=350
var netAmoAfterDueDate=netAmoDueDate+lateAmouChar
var a="K-Electric Bill"
var b=a.bold()
var c=b.fontsize(10)
document.write(c+"<br><br>Customer Name: "+(name.bold())+"<br>Month: "+(mon.bold())+"<br>Number of units: "+units+"<br>Charges per unit: "+charPerUnit+"<br><br>Net Amount Payable (within Due Date): "+netAmoDueDate+"<br>Late Payment Surcharge: "+lateAmouChar+"<br>Gross Amount Payable (after Due Date): "+netAmoAfterDueDate)

             //   CHAPTER 35-38 TASK 1
function time(a){
    document.write(a)
}
var t=new Date()
time(t)

             //   CHAPTER 35-38 TASK 2
function fullName(firstName,lastName){
    document.write("Good Morning "+firstName+" "+lastName)
}
fullName("Muhammad","Bilal")

             //   CHAPTER 35-38 TASK 3
function add(a,b){
    return a+b
}
num1=+prompt("Enter the value of number 1")
num2=+prompt("Enter the value of number 2")
document.write("The sum of two numbers is "+add(num1,num2))

             //   CHAPTER 35-38 TASK 4
function calculator(a,b,op){
    if(op==="+"){
        document.write("The sum of two numbers is "+(a+b))
    }
    else if(op==="-"){
        document.write("The difference of two numbers is "+(a-b))
    }
    else if(op==="*"){
        document.write("The product of two numbers is "+(a*b))
    }
    else if(op==="/"){
        document.write("The division of two numbers is "+(a/b))
    }
    else if(op==="%"){
        document.write("The modulus of two numbers is "+(a%b))
    }
    else{
        document.write("Inappropriate operator")
    }
}
calculator(3,3,"+")
             //   CHAPTER 35-38 TASK 5
function square(a){
    return a*a
}
document.write("The square of your number is "+square(4))

             //   CHAPTER 35-38 TASK 6
factorial=1
function fact(a){
    for(var i=1;i<=a;i++){
        factorial=factorial*i
    }
    return factorial
}
var n=+prompt("Enter any positive number to find its factorial")
alert("The factorial of "+n+" is "+fact(n))

             //   CHAPTER 35-38 TASK 7
function count(a,b){
    for(var i=a;i<=b;i++){
        document.write(i+"<br>")
    }
}
var s=+prompt("Enter starting value")
var e=+prompt("Enter ending value")
count(s,e)

             //   CHAPTER 35-38 TASK 8
function calculateHypotenuse(b,p){
    function calculateSquare(){
        var h=(b*b)+(p*p)
        sq=Math.sqrt(h)
        return sq
    }
    document.write(calculateSquare())
}
var base=+prompt("Enter the base value of right angle triangle")
var perp=+prompt("Enter the perpendicular value of right angle triangle")
calculateHypotenuse(base,perp)
             //   CHAPTER 35-38 TASK 9
function area(w,h){
    var A=w*h
    document.write(A)
}
var a=20
var b=10
area(12,13)
area(a,b)

             //   CHAPTER 35-38 TASK 10

function palindrome(a){
    var s=""
    for (var i=(a.length-1);i>=0;i--){
        s+=a[i]
    }
    return s==a
}
document.write(palindrome("Hello"))

             //   CHAPTER 35-38 TASK 11
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"))

             //   CHAPTER 35-38 TASK 12
function long(s){
var str = s.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.write(long("Web Development Tutorial"))
             //   CHAPTER 35-38 TASK 13
function count(s,l){
    var count=0
    var str=s.split("")
    for(var i=0;i<str.length;i++){
        if (str[i]===l){
            count=count+1
        }
    }
    return count
}
document.write(count("JSResourceS.com","o"))
             //   CHAPTER 35-38 TASK 14
function calcCircumference(r){
    var cir=2*3.142*r
    document.write("The circumference is: "+cir)
}
function calcArea(r){
    var area=3.142*r*r
    document.write("The area is: "+area)
}
calcCircumference(3)
calcArea(10)

