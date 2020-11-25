// Form Blur Event Listerners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{2,10}$/;
    
    if(!re.test(name.value)) {
        name.classList.add("is-invalid");
    } else {
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^\d{5}(-\d{4})?$/;
    
    if(!re.test(zip.value)) {
        zip.classList.add("is-invalid");
    } else {
        zip.classList.remove("is-invalid");
        zip.classList.add("is-valid");
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([\w\-\.]+)@([\w\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    if(!re.test(email.value)) {
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\(?(\d{3})\)?[-\.\s]?(\s\()?(\d{3})\)?[-\.\s]?(\s\()?(\d{4})\)?$/;
    // Brad's version : /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    
    if(!re.test(phone.value)) {
        phone.classList.add("is-invalid");
    } else {
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
    }
}