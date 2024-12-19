let identity = document.getElementById("name");
const phone = document.getElementById("phone");
let button = document.getElementById("button"); 

button.onclick = function() {
    if (typeof identity.value !== 'string') {
        alert("Please enter a valid name");
        
    } 
    else if (typeof phone.value !== 'number') { 
        alert("Please enter a valid phone number");
        
    } 
    else {
         alert("Your application has been submitted");
        
    }
    window.location.href="form.html" ;
};


