window.onload = function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
    }
 }

 function placeOrder() {
    const fnameLetters = []

    fnameLetters[0] = document.getElementById("f1").value
    fnameLetters[1] = document.getElementById("f2").value
    fnameLetters[2] = document.getElementById("f3").value
    fnameLetters[3] = document.getElementById("f4").value
    fnameLetters[4] = document.getElementById("f5").value
    fnameLetters[5] = document.getElementById("f6").value
    fnameLetters[6] = document.getElementById("f7").value
    fnameLetters[7] = document.getElementById("f8").value
    fnameLetters[8] = document.getElementById("f9").value
    fnameLetters[9] = document.getElementById("f10").value

    var firstName = ""

    for( let i = 0; i < 10; i++){
        firstName = firstName.concat(fnameLetters[i])
     }
     console.log(firstName)
    const lnameLetters = []

    lnameLetters[0] = document.getElementById("l1").value
    lnameLetters[1] = document.getElementById("l2").value
    lnameLetters[2] = document.getElementById("l3").value
    lnameLetters[3] = document.getElementById("l4").value
    lnameLetters[4] = document.getElementById("l5").value
    lnameLetters[5] = document.getElementById("l6").value
    lnameLetters[6] = document.getElementById("l7").value
    lnameLetters[7] = document.getElementById("l8").value
    lnameLetters[8] = document.getElementById("l9").value
    lnameLetters[9] = document.getElementById("l10").value

    var lastName = ""

    for( let i = 0; i < 10; i++){
        lastName = lastName.concat(lnameLetters[i])
     }
     console.log(lastName)
 }