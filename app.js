    // has attribute ,get attribute, setattribute, .attribute//four property


// var h1 = document.getElementsByTagName("h1")
// console.log(h1[0])//has attribute check katra h ky html file par ya attribute laga howa ya nhi 


// function clickBtn(){
//     if (h1[0].hasAttribute("id") == false) {
//        h1[0].style.border="5px solid yellow"//set color
//        h1[0].id ="new"//set id 
//   // console.log(h1[0].attributes)//check all attribute//property 
//         // console.log(h1[0].getAttribute("style"))//style ki value
//         // h1[0].setAttribute("id","new")
//         // h1[0].setAttribute("style","border:5px solid yellow")
//        }
//        else {
//            console.log("set id")
//        }
// }

// if (h1[0].hasAttribute("id") == false) {
//  h1[0].setAttribute("id","new")

// }
// else {
//     console.log("set id")
// }

//creat elements in javascript
// var textshow = document.getElementById("textshow")
// for(var j=0;j<10;j++){
//     var data = document.createElement("h1")//creat elements tag banata h 
// console.log(data)
// var text = document.createTextNode("hello world")//creattextnode text lata h
// console.log(text)
// data.appendChild(text)//tetx ko teg m lata h
// textshow.appendChild(data)
// }
var textshow = document.getElementById("textshow")
var emailarry = [
"sohail@gmail.com",
"mehtab@gmail.com"
]

var namearry = [
"sohail",
"mehtab"
]

var imagearry = [
"",
""
]

var card = document.createElement("div")
card.setAttribute("class","card")
var image = document.createElement("image")
image.src = imagearry[0]
card.appendChild(image)
textshow.appendChild(card)


