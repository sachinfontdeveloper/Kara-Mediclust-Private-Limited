

// Form Validation

function contactvalidation() {
    var fullname = document.getElementById("fName").value;
    var mobileno = document.getElementById("mobileNo").value;
    var emailid = document.getElementById("emailId").value;

    if(fullname == ""){
        document.getElementById("fnameError").innerHTML = "Please fill out this field";
        return false;
    }
    if(mobileno == ""){
        document.getElementById("mnoError").innerHTML ="Please fill out this field";
    }
    if(emailid == ""){
        document.getElementById("emailError").innerHTML ="Please fill out this field";
    }
    else{
        alert("Success");
    }
}