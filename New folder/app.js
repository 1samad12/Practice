


// table task

// var userinpt=+prompt("enter teble")
// var userinpt2=+prompt("enter number")
// for(var i=1;i<=userinpt2;i++){
//     document.write(userinpt+"x"+i+"="+userinpt*i,"<br>")
// }



//xxxxx//


// var userinpt=prompt("Enter city name")
// var arr=["karachi","lahore","islamabad","peshawer",' quatta']
// var match=false
// for(var i=0; i<arr.length; i++){
//     if(userinpt==arr[i]){
//         // match=false
//         alert("city found")
//         break
//     }
// }
// if(match==false){
//     alert("city note found")
// }



// Task 1
// var name = prompt("Enter your name")
// alert(name)

// Task 2
// var num = +prompt("Enter Number")
// if(num==''){
//     var defaultNum =5
//     for(var i=1;i<=10;i++){
//     document.write(`${defaultNum}*${i} = ${defaultNum*i}<br>`)
// }
// }
// else{
//     for(var i=1;i<=10;i++){
//         document.write(`${num}*${i} = ${num*i}<br>`)
//     }
// }

// Task 3 
// var city = prompt("Enter city")
// if(city==='Karachi'){
//     alert('Welcome to city of lights')
// }
// else if(city==="Lahore"){
//     alert("Welcome to heart city of Pakistan")
// }
// else if(city==='Islamabad'){
//     alert('Welcome to capital city of Pakistan')
// }


// Task 4
// var gender = prompt("Enter your gender ")
// if(gender==='male'){
//     alert('Good Morning Sir')
// }
// if(gender==='female'){
//     alert('Good Morning Mam')
// }


// Task 5 
// var signalColor = prompt("Give me color of signal")
// if(signalColor==='red'){
//     alert('Vehicles must stop')
// }
// else if(signalColor==='yellow'){
//     alert('Vehicles should ready to move')
// }
// else if(signalColor==='green'){
//     alert('Vehicles can move now')
// }
// else if(signalColor!='red'||signalColor!='yellow'||signalColor!='green'){
//     alert("Give the color green,yellow or red")
//     signalColor=prompt('Give the color green,yellow or red')
//     if(signalColor==='red'){
//         alert('Vehicles must stop')
//     }
//     else if(signalColor==='yellow'){
//         alert('Vehicles should ready to move')
//     }
//     else if(signalColor==='green'){
//         alert('Vehicles can move now')
//     }
// }


// Task 6 
// var max_age = 30
// var currentAge= +prompt("Enter your current age")
// if(max_age>=currentAge){
//     alert("You are welcome")
// }


// Task 7 
// var remainFuel =+prompt("Enter remaining fuel")
// if(remainFuel<0.25){
//     alert("Please Refill fuel")
// }

// Task 8

// var a= 4
// if(++a==5){
//     alert("welcome")
// }
// if('car'<'cat'){
//     alert('Welcome')
// }
// if(true){
//     alert(true)
// }


// Task 9
// var totalMarks =500
// var marksOfIslamiat = +prompt('Enter marks of Islamiat')
// var marksOfEnglish = +prompt('Enter marks of English')
// var marksOfUrdu = +prompt('Enter marks of Urdu')
// var marksOfMaths = +prompt('Enter marks of Maths')
// var marksOfScience = +prompt('Enter marks of Science')
// var marksObtained =marksOfEnglish+marksOfIslamiat+marksOfMaths+marksOfScience+marksOfUrdu
// var percentage= (marksObtained/totalMarks)*100
// var grade
// var remarks
// if(percentage>=80){
//     grade ="A+"
//     remarks="Excellent"
// }
// else if(percentage<80 &&percentage>=70){
//     grade ="A"
//     remarks="Good"
// }
// else if(percentage<70&&percentage>=60){
//     grade ='B'
//     remarks="Keep it up but need more improvement"
// }

// else{
//     grade= 'F'
//     remarks='Sorry you are fail'
// }
// document.write(`Mark Sheet<br><br>Total Marks : ${totalMarks}<br>Marks Obtained : ${marksObtained} <br>English :${marksOfEnglish} <br>Science : ${marksOfScience}<br>Urdu : ${marksOfUrdu}<br>Mathematics : ${marksOfMaths}<br>Islamiat : ${marksOfIslamiat}<br>Percentage : ${percentage}<br>Grade : ${grade}<br>Remarks : ${remarks}`)



// Task 10
// var nameOfItem1= prompt("Enter first item want to buy")
// var quantityOfItem1= +prompt("Enter quantity for this item")
// var nameOfItem2= prompt("Enter second item want to buy")
// var quantityOfItem2= +prompt("Enter quantity for this item")

// var shippingCharges =300
// var priceOfItem1 =800
// var priceOfItem2 =1200
// var totalCost = (priceOfItem1*quantityOfItem1)+(priceOfItem2*quantityOfItem2)+shippingCharges
// var discountAmount = (totalCost*0.10)
// var finalCost

// if(totalCost>2000){
//     finalCost=totalCost-discountAmount
//     document.write(`Shopping Cart<br><br>Price of ${nameOfItem1} : ${priceOfItem1}<br>Quantity of ${nameOfItem1} : ${quantityOfItem1}<br>Price of ${nameOfItem2} : ${priceOfItem2}<br>Quantity of ${nameOfItem2} : ${quantityOfItem2}<br>Shipping Charges :${shippingCharges}<br>Total Amount : ${totalCost}<br>Disount : ${discountAmount}<br>Total Cost after Discount : ${finalCost}`)
// }
// else{
//     document.write(`Shopping Cart<br><br>Price of ${nameOfItem1} : ${priceOfItem1}<br>Quantity of ${nameOfItem1} : ${quantityOfItem1}<br>Price of ${nameOfItem2} : ${priceOfItem2}<br>Quantity of ${nameOfItem2} : ${quantityOfItem2}<br>Shipping Charges :${shippingCharges}<br>Total Amount : ${totalCost}`)

// }


// Task 11
// var storeNumber = 6
// var guessingNumber = +prompt("Guess the number")
// while(true){
// if(guessingNumber===storeNumber){
//     alert('Yahoo you got it')
//     break;
// }
// else if(guessingNumber+1 ==storeNumber ||guessingNumber-1 ==storeNumber ){
//     alert('Close enough')
//      guessingNumber = +prompt("Guess the number again")
// }

// else{
// alert('Keep try')
// guessingNumber = +prompt("Guess the number again")   
// }
// }


// Task 12 
// var num= +prompt("Enter number")
// if(num%3==0){
//     alert("Number is Divisable by 3")
// }
// else{
//     alert("Number is not Divisable by 3")

// }


// Task 13 
// var firstTeamName = prompt("Enter first team name ")
// var firstTeamScore = +prompt("Enter first team score")
// var secondTeamName = prompt("Enter second team name ")
// var secondTeamScore = +prompt("Enter second team score")

// if(firstTeamScore==secondTeamScore){
//     alert('Tie')
// }
// else if(firstTeamScore>secondTeamScore){
//     alert(`${firstTeamName} won `)
// }
// else{
//     alert(`${secondTeamName} won `)

// }


// Task 14 
// var firstVariable = "Pakistan"
// var secondVariable = 2
// var thirdVariable = true

// var typeOfFirst = typeof(firstVariable)
// var typeOfSecond = typeof(secondVariable)
// var typeOfThird = typeof(thirdVariable)

// document.write(`${firstVariable} : type(${typeOfFirst})<br>${secondVariable} : type(${typeOfSecond})<br>${thirdVariable} : type(${typeOfThird})`)


// Task 15 
// var num = +prompt('Enter number')
// if(num%2==0){
//     alert('Number is Even')
// }
// else{
//     alert("Number is odd")
// }


// Task 16 
// var firstNum = +prompt("Enter first Number ")
// var secondNum = +prompt("Enter second Number")
// var operator = prompt("Enter Operator (+,-,*,/)")

// if(operator=='+'){
//     alert(firstNum+secondNum)
// }

// else if(operator=='-'){
//     alert(firstNum-secondNum)
// }
// else if(operator=='*'){
//     alert(firstNum*secondNum)
// }
// else if(operator=='/'){
//     alert(firstNum/secondNum)
// }

// else{
//     alert('Reload the page and enter correct operator')
// }

// Task 18
// var num1 =+prompt("Enter first number")
// var num2 = +prompt('Enter second number')

// if(num1>num2){
//     document.write(`${num1} is greater than ${num2}`)
// }

// else if(num1<num2){
//     document.write(`${num2} is greater than ${num1}`)
// }
// else {
//     document.write(`${num1} is equal to ${num2}`)
// }


// Task 20 
// var day= prompt("Enter day")
// if(day=='Monday'||day=='Tuesday'||day=='Wednesday'||day=='Thursday'||day=='Friday'){
//     alert('Week Day')
// }
// else if(day=='Saturday'||day =='Sunday'){
//     alert('WeekEnd Day')
// }
// else{
//     alert("Not a day")
// }



// Task 22 
// var takeNumber = +prompt("Enter number")
// if(takeNumber>0){
//     alert('Positive Number')
// }
// else if(takeNumber==0){
//     alert('0th Number')
// }
// else{
//     alert("Negative Number")
// }


// Task 23 
// var noun =prompt("Enter Name of thing")
// var num =+prompt("Enter number ")

// alert(`${num} ${noun}`)

// Task 24
// var saveName= 'Ali'
// var check = prompt("Enter Name")
// if(saveName==check){
//     alert("Welcome")
// }


// Task 25 
// var type = prompt("Enter character")
// if(type>='A'&&type<='Z'){
//     alert('Uppercase')
// }
// else if(type>='a'&&type<='z'){
//     alert('Lowercase')
// }
// else{
//     alert('Number')
// }

// Task 27
// var num1 = +prompt("Enter first number ")
// var num2 = +prompt("Enter Second number ")
// var operator = prompt('Enter operator')
// switch (operator) {
//     case '+':
//         alert(num1 + num2);
//         break;
//     case '-':
//        alert( num1 - num2);
//         break;
//     case '*':
//        alert( num1 * num2);
//         break;
//     case '/':
//        alert( num1 / num2);
//         break;
//     default:
//         alert('Enter correct Operator')
// }

// Task 28
// var year = prompt("Enter year to check is it leap year or not")
// if(year%4==0){
//     alert('This year is leap year')
// }
// else{
//     alert("Not a leap year")
// }


// Task 29
// var storePassword = 'abcde'
// var userPass = prompt("Enter password")

// while(1){
//     if(userPass==''){
//     alert('Please Enter password') 
//     userPass=prompt('Enter Password')
//     if(userPass!=''){
//         break
//     }
// }
// }
// if(userPass===storePassword){
//     alert('Correct Password')
// }
// else{
//     alert('Incorrect pasword')
// }


// Task 30 
// var checkVowel = prompt("Enter character")
// if(checkVowel.length!=1){
//     while(1){ 
//         alert('Enter only one character')
//         checkVowel=prompt('Enter Character')
//         if(checkVowel.length==1){
//             if(checkVowel=='a'||checkVowel=='e'||checkVowel=='i'||checkVowel=='o'||checkVowel=='u'){
//                 alert('Character is vowel')
//             }else{
//                 alert('Not a vowel')
//             }
//             break
//         }}
// }

// else if(checkVowel=='a'||checkVowel=='e'||checkVowel=='i'||checkVowel=='o'||checkVowel=='u'){
//     alert('Character is vowel')
// }
// else{
//     alert('Not a vowel')
// }


// Task 31 
// var month =7
// switch(month){
//     case 12:
//         alert('December')
//         break
//         case 11:
//             alert('November')
//             break
//             case 10:
//             alert('October')
//             break
//             case 9:
//             alert('September')
//             break
//             case 8:
//             alert('August')
//             break
//             case 7:
//             alert('July')
//             break
//             case 6:
//             alert('June')
//             break
//             case 5:
//             alert('May')
//             break
//             case 4:
//             alert('April')
//             break
//             case 3:
//             alert('March')
//             break
//             case 2:
//             alert('Feburary')
//             break
//             case 1:
//             alert('Janurary')
//             break
//             default:
//                 alert('Not a month')
//     }
    


// Task 32 
// var qualifications = ['SSC','HSC','BCS','BS','BCOM','MS','MPHIL','PHD']

// document.write('Qualification <br><br>')
// for(var i=0;i<qualifications.length;i++){
//     document.write(qualifications[i]+'<br>')
// }


// Task 33
// var movies = []
// movies.push('Avenger:Age of Union')
// movies.push('Specture')
// movies.push('Jurassic World')
// movies.push('Inside Out')

// document.write('Top movies<br><br>')

// for(var i=0;i<movies.length;i++){
//     document.write(movies[i]+'<br>')
// }

// document.write('Length of Array : '+movies.length)


// Task 34

// var cars=['Alto','Mehran','Cultus']
// var lastIndex = cars.length-1
// document.write('First index of Array : 0<br><br>')
// document.write(`Item at first index  :${cars[0]}<br>`)
// document.write(`Last index of Array : ${lastIndex}<br>`)
// document.write(`Item at last index of Array : ${cars[lastIndex]}`)


// // Task 35
// var students =['Ali','Ahmed','Ismail']
// var score=[170,180,186]
// var totalMarks =200
// var percentage = []
// for(var i=0;i<score.length;i++){
//     percentage.push((score[i]/totalMarks)*100)
// }
// for(var j=0;j<students.length;j++){    
// document.write(`Score of ${students[j]} is ${score[j] } and Percentage : ${percentage[j]} %<br>`)
           
//         }
    

// Task 36 
// (a)
// var colors = []
// var addingColor = prompt('Write the color want to add in starting in an array')
// colors.unshift(addingColor)
// console.log(colors)

// // (b)
// var addingColorAtEnd = prompt('Write the color want to add at the end of an array')
// colors.push(addingColorAtEnd)
// console.log(colors)

// // (c)
// colors.unshift('black','white')
// console.log(colors)

// // (d)
// colors.shift()
// colors.pop()
// console.log(colors)

// // (e)
// var colorToAddIndex = +prompt('To which index want to add color')
// var colorWantToAdd= prompt('Color want to add')
// colors.splice(colorToAddIndex,0,colorWantToAdd)
// console.log(colors)

// // (f)
// var colorToDeleteIndex = +prompt('To which index want to delete color')
// var NumberOfColorToDelete= +prompt('Color want to delete')
// colors.splice(colorToDeleteIndex,NumberOfColorToDelete)
// console.log(colors)


// Task 37
// var array =[2,3,1,4,5,0]
// array.sort()
// console.log(array)

// Task 38
// var fruits= ['stawberry','orange','banana','apple']
// fruits.sort()
// console.log(fruits)

// Task 39
// var cities =['Karachi','Lahore','Islamabad','Quetta','Peshawar']
// var specific= cities.slice(1,4)
// console.log(specific)

// Task 40
// var array= ['This','is','my','Array']
// var result =array.join(' ')
// console.log(result)


// Task 41









