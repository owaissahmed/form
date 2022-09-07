var fname = document.getElementById("firstname")
var lname = document.getElementById("lastname")
var emails = document.getElementById("email")
var passwords = document.getElementById("password")
var cnics = document.getElementById("cnic")
function submit() {
    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var cnic = document.getElementById("cnic").value

    var Nameregex = /^\s*$/.test(firstname, lastname);
    var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/.test(email)
    var passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    var cnicregex = /^[0-9+]{5}[0-9+]{7}[0-9]{1}$/.test(cnic)

    if (firstname.length < 3 || Nameregex === true) {
        swal("Plzz enter the valid First name", "Input Must Not Be Empty", "error");
    }
    else if
        (lastname.length < 3 || Nameregex === true) {
        swal("Plzz enter the valid Last name", "Input Must Not Be Empty", "error")
    }
    else if
        (cnicregex === false) {
        swal("Plzz enter the valid CNIC", "Input Contain Only 13 Digits", "error")
    }
    else if
        (emailregex === false) {
        swal("Plzz enter the valid email", "Invalid Email", "error")
    }
    else if
        (passwordregex === false) {
        swal("plzz enter the valid password", "Minimum 8 characters,atleast 1 aphabet/number must contain", "error")
    }
    else {
        swal("Conratulations!", "Your form has been sumbited!", "success");

        var get = JSON.parse(localStorage.getItem("data"))
        if (get === null) {
            obj = {}
        } else {
            obj = get
        }
        obj[firstname] = {
            firstname: firstname,
            lastname: lastname,
            cnic: cnic,
            email: email,
            password: password
        }
        localStorage.setItem("data", JSON.stringify(obj))
    }
    fname.value = ""
    lname.value = ""
    emails.value = ""
    passwords.value = ""
    cnics.value = ""
    // location.reload()
}



var input = document.getElementById("adminpass")
function admin() {
    var btn = document.getElementById("btn")
    input.style.display = "block"
    btn.style.display = "block"

}
function check() {
    if (input.value === "password") {
        window.location.href = "admin.html"
    } else {
        swal("plzz enter the valid password", "Password Is password", "error")
    }
    input.value = ""
}
function dlt() {
    var getdata = JSON.parse(localStorage.getItem("data"))
    var names = Object.keys(getdata)
    console.log(names)
    for (var key in getdata)
        event.target.parentNode.parentNode.remove()
    localStorage.removeItem(getdata[key][0])
    console.log(getdata)
}