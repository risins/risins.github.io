const text =  document.querySelector('#message');

function checkEmail() {

    var email = document.getElementById("testEmail");
    var emailAdress = email.value;
    const notSupportedCountries = ".co";
    const notSupportedDomains = "@yahoo";
    // var idx = emailAdress.indexOf(notSupportedEmails);


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email.value.match(mailformat)) {
        if (emailAdress.endsWith(notSupportedCountries)) {
            text.innerText = "Attention! We don`t support e-mails from Colombia!"
            return true;
        }
        
        if (emailAdress.includes(notSupportedDomains)) {
            text.innerText = "Attention! We don`t support e-mails from Yahoo domain!"
            return true;
        }

        // if (emailAdress.endsWith('@yahoo.com')) {
        //     text.innerText = "We don`t support e-mails from Yahoo"
        //     return true;
        // }

        // if (idx > -1) {
        //     text.innerText="We don`t support subscriptions to Yahoo e-mails";
        //     // text.style.color = "orange";
        //     document.getElementById("testEmail").setAttribute('background-color:red !important');
        //     document.getElementById("testEmail").focus();
            
        //     // alert("We don`t support subscriptions to Yahoo e-mails")
        //     return true;
        // }
        else {
            window.location.href = "success.html"
            // text.innerText="Thanks for subscribing to concept.io";
            // alert("Thanks for subscribing to concept.io")
            return true;
        }

    }
    else {
        text.innerText="Attention! Please enter valid e-mail adress!"
        // alert("Please enter valid e-mail adress")
        return false;
    }
}


