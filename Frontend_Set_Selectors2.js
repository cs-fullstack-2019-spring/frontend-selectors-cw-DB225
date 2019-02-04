// Print the first p tag to the console using the ID, class, and tag selectors.
var firstP = document.getElementById("first");
var firstP2 = document.getElementsByTagName("p");
var firstP3 = document.getElementsByClassName("special")
//for loop for id
for(var i=0; i<firstP2.length; i++){
    console.log(firstP2[0]);
}
//for loop for Tag selector
for(var i=0; i<firstP.length; i++){
    console.log(firstP[0].textContent);
}
// ofr loop for Class
for(var i=0; i<firstP3.length; i++){
    console.log(firstP3[0].textContent);
}

/********************************************************************************************/

//Print the special class using both the query selector and query all selector.
//using querySelector
var specialClass = document.querySelector("p");
for(var i=0; i<specialClass.length; i++){
    console.log(specialClass[0].textContent);
}
//using querySelectorAll
var specialClass2 = document.querySelectorAll("p");
for(var i=0; i<specialClass2.length; i++){
    console.log(specialClass2[1].textContent);
}

/********************************************************************************************/

//Change the color of the h1 statement to blue.
var colorh1 = document.getElementsByTagName("h1");
for(var i=0; i<colorh1.length; i++){
    colorh1[0].style.color = "blue";
}

/********************************************************************************************/

//Change the color of the last p tag to yellow.
var colorLastP = document.getElementById("last");
colorLastP.style.color = "yellow";
