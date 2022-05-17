window.onload = function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
    }

    //Reference the DropDownList.
    var ddlYears = document.getElementById("ddlYears");

    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();
    var years = []
    //Loop and add the Year values to DropDownList.
    for (var i = 1900; i <= currentYear; i++) {
        for (var j = 1; j <= 12; j++){
            for (var k = 1; k <= 31; k++) {
                years.push(i + "/" + j + "/" + k)
            }
        }
    }
    for (let i =0; i<10000; i++)
    {
        let cardidx1 = Math.floor((Math.random() * years.length));
        let cardidx2 = Math.floor((Math.random() * years.length));
        let t = years[cardidx1];

        years[cardidx1] = years[cardidx2];
        years[cardidx2] = t;
    }
    years.forEach((el) => {
        var option = document.createElement("OPTION");
        option.innerHTML = el
        option.value = el
        ddlYears.appendChild(option);  
    })

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
 function findAddress (lat, long){
    let snip = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
    //snip = snip + lat + "," + long
    snip = snip + "44.154675100778356,-93.97372997318932"
    loadDoc(snip)

 }
 function loadDoc(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
       }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }