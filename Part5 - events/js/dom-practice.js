/*eslint-env browser*/

//STEP 1
function display (){
    window.alert("I have been clicked");
}

//STEP 2

var myelement = window.document.getElementById("buttons");
myelement.onclick = function () {
    "use strict"
    window.alert("I have been clicked");
}

//STEP 3

function part3 (){
    "use strict"
    window.alert("I have been clicked");
}
var buttonevent = window.document.getElementById("mybuttons");
buttonevent.addEventListener("click", part3);

//STEP 4
var callbackfunc = window.document.getElementById("mybuttons4");
callbackfunc.addEventListener("click", function (){
    "use strict"
    window.alert("I have been clicked");
});

//STEP 5

function init() {
    "use strict";
    var myButton5 = window.document.getElementById("mybuttons5")
    myButton5.addEventListener("click", function() {
        window.alert("I have been clicked")
    });
}

window.addEventListener("load", init);