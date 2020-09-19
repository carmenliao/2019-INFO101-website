//When all the fields are filled out, the website will say the subscription is successful; otherwise, the website will continue to tell the user to fill out the entire form until all fields are filled


function validateForm() {
    var w = document.forms["confirm"]["code3"].value;
    var x = document.forms["confirm"]["code"].value;
    var y = document.forms["confirm"]["code1"].value;
    var z = document.forms["confirm"]["code2"].value;
    
    if(w == false || x == false || y == false || z == false) {
        alert("Please fill out every field in the form!");
    }
    
    else {
        alert("Subscription successful!")
    }

}

