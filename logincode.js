function checkCreds() {
    console.log("checkCreds() started...");
    // create the variables and fill them in
    var firstName = document.getElementById("fName").value;
    console.log("First name: " + firstName);
    var lastName = document.getElementById("lName").value;
    console.log("Last name: " + lastName);
    var badgeNumb = document.getElementById("badgeID").value;
    // could not get code to work with parseint on it
    console.log("Badge ID: " + badgeNumb);

    //make a fullName variable
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);


    //check if fullName is 20 chars or less
    var fullNameLength = fullName.length;
    console.log("Full Name Length: " + fullNameLength);
    if (fullNameLength > 21 || fullNameLength < 3) {
        document.getElementById("loginStatus").innerHTML = " Invalid Full Name. Please resubmit.";
//check that badge number is less than 1000
    } else if(badgeNumb > 999 || badgeNumb < 1 ){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number. Please resubmit";
    }
    
    else {
          // if everything is ok, then grant access to the UATSpace webpage
        alert("Access Granted, Welcome " + fullName);
        location.replace("./UATSpacePage.html");
    }



}