// Chapter # 1

/*

alert("Hello world");

alert("Error! Please Enter a valid Password");

alert("Welcome to JS Land..." + "\n" + "Happy Coding!");

alert("Welcome to JS Land...");

alert("Happy Coding");

alert("Hello...I can run JS hrough my web browser's consol");

console.log("Hello...I can run JS hrough my web browser's consol")

// Chapter # 2

var username;
//

var myName = "Hafiz Attaurrehman";
//

var message = "Hello World";
alert(message);
//

var name = "John Doe";
var age = "15 years old";
var c = "Certified Mobile Application development";
alert(name);
alert(age);
alert(c);
//

var pizza =  "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P";
alert(pizza);
//

var email;
email = "attaurrehmaan97@gmail.com";
alert("My Email address is " + email);
//

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the BOOK "+ book);
//

var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);

// Chapter # 3

var age = 15;
alert("I am " + age + " years old");
//

var num = 14;
alert("You have visited this site " + num + " times");
//

var birthYear = 1997;
document.write("My birth Year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number");


// Chapter # 4

var first = "Hello", second = " World!", third = 15;

// Legal Vaibale

var xyz = "legal Variable";
var num1;
var c = a+b;
var emp_name;
var $xyz;

// Illegal Vaibale

var student name; (space)
var alert; (JavaScript's keywords)
var marks%;
var 2rollnum;
var ?x;

// Chapter # 5

var num1 = 3;
var num2 = 5;
var num  = 0;

num = num1 + num2;
alert("Sum of "+num1+" and "+num2+" is "+num);

num = num2 - num1;
alert("Subtraction of "+num2+" and "+num1+" is "+num);

num = num1 * num2;
alert("Multiplication of "+num1+" and "+num2+" is "+num);

num = num2 / num1;
alert("Division of "+num2+" and "+num1+" is "+num);

num = num2 % num1;
alert("Moduls of "+num2+" and "+num1+" is "+num);
//


var a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
++a;
document.write("Value after increment is:" + a + "<br>"); 
var c = a+7;
document.write("Value after addition is:" + c + "<br>");
--c;
document.write("Value after decrement is:" + c + "<br>");
var d = c%3;
document.write("The remainder is: "+ d + "<br>");
//

var cost = 600;
var total = 5*cost;
document.write("Total cost to buy 5 tickets to a movie is: "+ total + " PKR " + "<br>");
//

for(var i=1; i<=10; i++){
    document.write("4"+ "x" + i + "=" + i*4 + "<br>");
}
//

var c = 25;
var f = (c*9/5)+32;
document.write(c + "C " +" is equal to "+ f + "F " +"<br>");
//

var f = 70;
var c = (f-32)*5/9;
document.write(f + "F " +" is equal to "+ c + "C " +"<br>");
//

var item1 = prompt("Price of item 1");
var qt1 = prompt("Ordered Quantity of item 1");
var item2 = prompt("Price of item 2");
var qt2 = prompt("Ordered Quantity of item 2");
var shipping = prompt("Shipping Charges");
var total = (item1*qt1)+(item2*qt2)+(+shipping);
document.write("Price of item 1 is "+ item1+"<br>");
document.write("Quantity of item 1 is "+ qt1+"<br>");
document.write("Price of item 2 is "+ item2+"<br>");
document.write("Quantity of item 2 is "+ qt2+"<br>");
document.write("Shipping charges "+ shipping+"<br>");
document.write("Total Cost of Your Order is "+ total+"<br>");
//

var marks = prompt("Enter Total Marks");
var ob = prompt("Enter obtained marks");
var per = ob/marks*100;
document.write("Total Marks"+ marks+"<br>");
document.write("Obtained Marks"+ ob+"<br>");
document.write("Percentage is "+ per+"<br>");
//

var dollar = prompt("Enter Dollars");
var riyal = prompt("Enter Riyals");
var pkriyal = 28*riyal;
var pkdollar = 104.80*dollar;
var total = pkdollar+pkriyal;
document.write("Total Currency in PKR: "+ total+"<br>");
//

var a = 2;
var add = a+5;
var mul = a*10;
var div = a/2;
alert(add+mul+div);
//

var cy = prompt("Enter Current Year");
var by = prompt("Enter Birth Year");
var age = cy-by;
document.write("Current Year: "+ cy+"<br>");
document.write("Birth Year: "+ by+"<br>");
document.write("Your Age is "+ age+"<br>");
//

var pi = 3.142;
var radius = prompt("Enter radius of a circle");
var circumference = 2*pi*radius;
var area = pi*radius*radius;
document.write("Radius of a Circle is "+ radius+"<br>");
document.write("The circumference is "+ circumference+"<br>");
document.write("The Area is "+ area+"<br>");
//

var snacks = prompt("Enter Your Favorite Snacks");
var Age = prompt("Enter Your Age");
var maxage = 65;
var amount = prompt("Enter amount of Snacks per day");
var total = (maxage-Age)*3;
document.write("Favorite Snacks "+ snacks+"<br>");
document.write("Current Age "+ Age+"<br>");
document.write("Estimated Maximum Age "+ maxage+"<br>");
document.write("Amount of snacks per day "+ amount+"<br>");
document.write("You will need "+ total +" "+ snacks + " to last you until the ripe old age of "+ maxage +"<br>");
//

// Chapter # 6-9

var a = prompt("Enter Number");
document.write("Result: <br>");
document.write("The value of a is: " + a + "<br><br>");
++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br><br>");

--a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a + "<br><br>");
//

var a = 2,b = 1;
--a;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of b is: "+ b +"<br><br>");
--a - --b;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b is: "+ b +"<br><br>");
--a - --b + ++b;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b+ ++b is: "+ b +"<br><br>");
var result = --a - --b + ++b + b--;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b+ ++b + b-- is: "+ b +"<br><br>");
document.write("Now Result is: " + result + "<br><br>");
//

var input = prompt("Enter Name");
document.write("<h1>Welcome " + input +" </h1>")
//

var num = prompt("Enter number");
if (num == "") {
    for(var i=1; i<=10; i++){
        document.write("5"+ "x" + i + "=" + i*5 + "<br>");
    }
} else {
    for(i=1; i<=10; i++){
        document.write(num + "x" + i + "=" + i*num + "<br>");
    } 
}
//

var sub1 = prompt("Enter 1st Subject");
var sub2 = prompt("Enter 2nd Subject");
var sub3 = prompt("Enter 3rd Subject");
var marks = 100;
var ms1 = prompt("Enter Obtained Marks of Subject One");
var ms2 = prompt("Enter Obtained Marks of Subject Two");
var ms3 = prompt("Enter Obtained Marks of Subject Three");
var total = (+ms1)+(+ms2)+(+ms3);
var percentage1 = (ms1/marks)*100;
var percentage2 = (ms2/marks)*100;
var percentage3 = (ms3/marks)*100;
var per = (total/300)*100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>"+marks+"</td><td>"+ms1+"</td><td>"+percentage1+"%"+"</td></tr> <tr><td>"+sub2+"</td><td>"+marks+"</td><td>"+ms2+"</td><td>"+percentage2+"%"+"</td></tr> <tr><td>"+sub3+"</td><td>"+marks+"</td><td>"+ms3+"</td><td>"+percentage3+"%"+"</td></tr><tr><td></td><td>"+"300"+"</td><td>"+total+"</td><td>"+per+"%"+"</td></tr>");
//

// Chapter # 9-11

var karachi = prompt("Enter City","Karachi,Islamabad,Lahore");
if (karachi === "karachi") {
    document.write("Welcome to city of light")
} else {
    document.write("Not Found")
}
//

var gender = prompt("Enter Gender");
if (gender === "male") {
    document.write("Good Morning Sir")
} else {
    document.write("Good Morning Mam")
}
//

var color = prompt("Enter Color of Road traffic signal");
if (color === "red") {
    document.write("Must Stop")
} else if(color === "yellow"){
    document.write("Ready to move")
} else if(color === "green"){
    document.write("Move Now")
}
//

var fuel = prompt("Enter Fuels in Liters");
if (fuel <= 0.25) {
    document.write("Please refill the fuel in your car")
} else {
    document.write("Move on")
}
//

var a = 4;
if(++a === 5){
    alert("Given condition for variable a is true"); // Alert Message Displayed
}

var b = 82;
if(b++ === 83){
    alert("Given condition for variable b is true"); // Alert Message is not Displayed
}

var c = 12;
if(c++ === 13){
    alert("Given condition 1 for variable c is true"); // Alert Message is not Displayed
}

if(c === 13){
    alert("Condition 2 for variable c is true"); // Alert Message is Displayed
}
if(++c < 14){
    alert("Condition 3 for variable c is true"); // Alert Message is not Displayed
}
if(c === 14){
    alert("Condition 4 for variable c is true"); // Alert Message is Displayed
}
//

var materialCost = 20000;
var labourCost = 2000;
var TotalCost = materialCost + labourCost;
if(TotalCost === labourCost + materialCost){
    alert("Cost Equals");
}
//

if(true){
    alert("true");
}
if(false){
    alert("false");
}
//

var car = prompt("Enter any number for car");
var cat = prompt("Enter any number for cat");
if (car < cat ) {
    alert("car is smaller than cat");
} else {
    alert("cat is smaller than car");
}
//

var tmarks = prompt("Enter Total marks");
var obmarks = prompt("Enter obtained marks");
var perc = (obmarks/tmarks)*100;
document.write("Total Marks: "+ tmarks +"<br>");
document.write("Marks Obtained: "+ obmarks +"<br>");
document.write("Percentage: "+ perc +"%"+"<br>");
if(perc >= "90"){
    document.write("Grade : A <br>")
    document.write("Remarks : Excellent Performance  <br>")
}
else if(perc >= "80" && perc <= "89"){
    document.write("Grade : B <br>")
    document.write("Remarks : Good <br>")
}
else if(perc <= "79"){
    document.write("Grade : C <br>")
    document.write("Remarks : You Need To Improve <br>")
}
//

var game = 5;
var guess = prompt("Guess number from 1 to 10");
if(guess == game){
    document.write("Bingo! Correct Answer")
}
else if(guess > game){
    document.write("Close enough to the Correct Answer")
}
else if(guess < game){
    document.write("Close enough to the Correct Answer")
}
//

var divisible = prompt("Enter number");
var calculate = divisible%3;
if (calculate === 0) {
    document.write("This number is divisible by 3")
} else {
    document.write("This number is not divisible by 3")
}
//

var divisible = prompt("Enter number");
var calculate = divisible%2;
if (calculate === 0) {
    document.write("This number is Even Number")
} else {
    document.write("This number is Odd Number")
}
//

var t = prompt("Enter Temperature","0 to 50");
if (t > 40) {
    document.write("It is too hot outside")
} 
else if(t > 30) {
    document.write("The weather today is normal")
}
else if(t > 20) {
    document.write("Today weather is Cool")
}
else if(t > 10) {
    document.write("OMG! Today weather is so Cool")
}
//

var fstnum = prompt("Enter 1st number");
var secnum = prompt("Enter 2nd number");
var operator = prompt("Enter Operator");
if (operator === "+") {
    document.write((+fstnum)+(+secnum))
} 
else if(operator === "-") {
    document.write(fstnum-secnum)
}
else if(operator === "*") {
    document.write(fstnum*secnum)
}
else if(operator === "/") {
    document.write(fstnum/secnum)
}
else if(operator === "%") {
    document.write(fstnum%secnum)
}

// Chapter # 12-13

var ch = prompt("Enter number or a String");
if(ch >= 'A' && ch <= 'Z')
    {
        document.write( ch ," is uppercase alphabet.")
    }
    else if(ch >= 'a' && ch <= 'z')
    {
        document.write(ch ," is lowercase alphabet.")
    }
    else
    {
        document.write( ch ," is a number")
    }
//

var int1 = prompt("Enter 1st integer");
var int2 = prompt("Enter 2nd integer");
if (int1 > int2) {
    document.write("1st integer " + int1 + " is Greater than "+ int2)
} else if(int2 > int1){
    document.write("2nd integer " + int2 + " is Greater than "+ int1)
}
else{
    document.write(int2 + " and "+ int1 + " both are equal")
}
//

var input = prompt("Enter Number")
if(input > 0){
    document.write("Given Input is Positive")
}
else if(input < 0){
    document.write("Given Input is Negative")
}
else if(input == 0){
    document.write("Given Input is Zero")
}
//

var ch = prompt("Enter Vowel or not");

if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' )
{
    document.write("It is Vowel")
}
else 
{
    document.write("It is not Vowel")
}
//

var password = prompt("Enter Password");
var valid = prompt("Re-Enter Your Password");
if(password == ""){
    document.write("Please enter your password")
}else if(password === valid){
    document.write("Correct! The Password you entered matches the original password")
}else if(password !== valid){
    document.write("Incorrect password")
}
//

var greeting;
var hour = 13;
if(hour < 18){
    greeting = "Good Day";
    document.write(greeting);
}else{
    greeting = "Good Evening"
    document.write(greeting);
}
//

var time = prompt("Enter Time in 24 Format","Like 1900");
if(time >= 0000 && time < 1200){
    document.write("Good Morning")
}else if(time >= 1200 && time < 1700){
    document.write("Good Afternoon")
}else if(time >= 1700 && time < 2100){
    document.write("Good Evening")
}else if(time >= 2100 && time < 2359){
    document.write("Good Night")
} 
//

// Chapter # 14-16

var studentname = [];
studentname[0] = prompt("Enter student Name");
studentname[1] = prompt("Enter 2nd student Name");
document.write(studentname);
//

var studentname = [];
studentname[0] = "Ali";
studentname[1] = "usman";
studentname[2] = "Bilal";
document.write(studentname);
//

var arr = ["Student1","Student2","Student3"];
document.write(arr);
//

var arr = ["1","2","3"];
document.write(arr);
// 

var mixedarray = ["1","Bob","Now is","True"];
document.write(mixedarray);
//

var arr = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
document.write("Qualification <br>");
document.write("1) "+ arr[0] + "<br>");
document.write("2) "+ arr[1] + "<br>");
document.write("3) "+ arr[2] + "<br>");
document.write("4) "+ arr[3] + "<br>");
document.write("5) "+ arr[4] + "<br>");
document.write("6) "+ arr[5] + "<br>");
document.write("7) "+ arr[6] + "<br>");
document.write("8) "+ arr[7] + "<br>");
//

var arr = ["Kashif","Fahad","Haseeb"];
var arr1 = ["320","230","480"];
var per0 = (arr1[0]/500)*100;
var per1 = (arr1[1]/500)*100;
var per2 = (arr1[2]/500)*100;
document.write("Score of " + arr[0] + " is " + arr1[0] + ". Percentage:" + per0 + " % <br>");
document.write("Score of " + arr[1] + " is " + arr1[1] + ". Percentage:" + per1 + " % <br>");
document.write("Score of " + arr[2] + " is " + arr1[2] + ". Percentage:" + per2 + " % <br>");
//

var colorname = ["Red","Green","Blue","White","Black"];
document.write("Original Array: "+colorname+ "<br>");

var addbgcolor = prompt("Enter color which you want to add begining of array");
colorname.unshift(addbgcolor);
document.write("Add beginnig: "+colorname+ "<br>");

var addendcolor = prompt("Enter color which you want to add End of array");
colorname.push(addendcolor);
document.write("Add End: "+colorname+ "<br>");

var add1stcolor = prompt("Enter 1st color");
var add2ndcolor = prompt("Enter Color color");
colorname.unshift(add1stcolor);
colorname.unshift(add2ndcolor);
document.write("Add Two more colors at beginning: "+colorname+ "<br>");

colorname.shift(add2ndcolor);
document.write("Remove beginnig: "+colorname+ "<br>");

colorname.pop(addendcolor);
document.write("Remove End: "+colorname+ "<br>");

var index = prompt("Enter Index Where you want to add color");
var color = prompt("Enter Colorname");
colorname.splice(index,1,color);
document.write("Add particular position: "+colorname+ "<br>");

var index1 = prompt("Enter Index Where you want to delete color");
colorname.splice(index1,1);
document.write("Remove particular position: "+colorname+ "<br>");
//

var score = [320,230,480,120];
var arr;
document.write("Student score is: "+ score);
for(var i=0; i<score.length; i++){
    for(var j=i+1; j<score.length; ++j){
        if(score[i] > score[j]){
            arr = score[i];
            score[i] = score[j];
            score[j] = arr;
        }
    }
}
document.write("<br> The asscending order is: ");
for(i=0; i<score.length; ++i)
document.write("<br>"+ score[i]);
//

var arr = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities List <br>"+arr+"<br>");
arr2 = arr.slice(2,4);
document.write("Selected Cities List <br>"+arr2);
//

var arr = ["This","is","my","cat"];
document.write("Array is: <br>"+arr+"<br>");
var join = arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3];
document.write("String: <br>"+join);
//

var devices = [];
var length = prompt("Enter the length of array");
for(var i=0; i<length; i++){
    var add = devices.push(prompt("Enter Devices"));
}
document.write("Devices: <br>"+devices+"<br>");
for(var j=0; j<i; j++){
    var out = devices.shift();
    document.write("Out: <br>"+out+"<br>");
}
//

var devices = [];
var length = prompt("Enter the length of array");
for(var i=0; i<length; i++){
    var add = devices.push(prompt("Enter Devices"));
}
document.write("Devices: <br>"+devices+"<br>");
for(var j=0; j<i; j++){
    var out = devices.pop();
    document.write("Out: <br>"+out+"<br>");
}
//
var phone = ["Apple","Samsung","Motorola","Nolia","Sony","Haier"];
document.write(<select>
    <option>Apple</option>
    <option>Samsung</option>
    <option>Motorola</option>
    <option>Nokia</option>
    <option>Sony</option>
    <option>Haier</option>
</select>);

// Chapter # 17-20

var arr = [];
var arr1 = [0,1,2,3];
var arr2 = [1,0,1,2];
var arr3 = [2,1,0,1];
arr = document.write(arr1+"<br>");
arr = document.write(arr2+"<br>");
arr = document.write(arr3+"<br>");
//

for(var i=1; i<=10; i++){
    document.write(i+"<br>");
}
//

var table = prompt("Enter a number to show its multiplication table");
var len = prompt("Enter Length of your table");
for(var i=1; i<=len; i++){
    document.write(table + "x" + i + "=" + i*table + "<br>");
}
//

var fruits = ["Apple","Banana","Mango","Orange","Strawbwry"];
for(var i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>");
}
for(var i=0; i<fruits.length; i++){
    document.write("Elements at index "+ i + " is "+ fruits[i]+"<br>");
}
//

document.write("Counting <br>")
for(var i=1; i<=15; i++){
    document.write(i+",");
}
document.write("<br>Reverse Counting <br>")
for(var i=10; i>=1; i--){
    document.write(i+",");
}
document.write("<br>Even <br>")
for(var i=0; i<=20; i++){
    for(var j=i; j%2==0; j++)
    document.write(j+",");
}
document.write("<br>Odd <br>")
for(var i=0; i<=20; i++){
    for(var j=i; j%2!=0; j++)
    document.write(j+",");
}
document.write("<br>Series <br>")
for(var i=2; i<=20; i++){
    for(var j=i; j%2==0; j++)
    document.write(j+"k,");
}
//

var arr = ["cake","Apple pie","cookie","chips","patties"];
var bakery = prompt("Welcome to ABC Bakery, What do you want to order Sir/Mam");
for(var i=0; i<=arr.length; i++){
    if(arr[i]==bakery){
        document.write(bakery +" is available at index "+ i );
    }
}
//

var score = [24,53,78,91,12];
document.write("Array items <br>"+score);
for(var i=0; i<score.length; i++){
    for(var j=i+1; j<score.length; j++){
        if(score[j] > score[i]){
            
        }
        else{
            document.write("<br> The Largest number is: "+ score[i]);
        }
        break
    }
    
}
//

var score = [24,53,78,91,12];
document.write("Array items <br>"+score);
for(var i=0; i<score.length; i++){
    for(var j=i; j<score.length; j++){
        if(score[i] > score[j]){
            document.write("<br> The Smallest number is: "+ score[j]);
        } 
    }
    break
}

//

for(var i=1; i<=100; i++){
    for(var j=i; j%5==0; j++)
    document.write(j+" ,");
}

*/
