
var checkValidation = function () {
    valid = testEmpty("#firstName", "#error_firstName") & testEmpty("#lastName", "#error_lastName") & testEmpty("#password", "#error_password") & testEmpty("#confirmPassword", "#error_confirmPassword") & testEmpty("#email", "#error_email");
    valid &= checkCharacter("#firstName", "#error_firstName_all_leter") & checkCharacter("#lastName", "#error_lastName_all_leter")
    valid &= checkNumberPhone("#phone", "#error_phone")
    valid &= checkEmail("#email", "#error_email")
    valid &= checkLength("#password", "#error_password")
    if (valid == false) {
        return false
    }
    return true;
}

var testEmpty = function (value, selectorError) {
    var inputText = document.querySelector(value)
    if (inputText.value.trim() === "") {
        document.querySelector(selectorError).innerHTML = inputText.name + " " + "không được bỏ trống !"
        document.querySelector(selectorError).style.display = "block"
        return false
    } else {
        document.querySelector(selectorError).innerHTML = ""
        document.querySelector(selectorError).style.display = "none"
        return true
    }
}

var checkCharacter = function (value, selectorError) {
    var inputText = document.querySelector(value);
    var regexText = /^[a-zA-z]+$/
    if (regexText.test(inputText.value)) {
        document.querySelector(selectorError).innerHTML = ""
        document.querySelector(selectorError).style.display = "none"
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + " " + "phải là chữ !"
        document.querySelector(selectorError).style.display = "block"
        return false;
    }
}
var checkNumberPhone = function (value, selectorError) {
    var inputNumber = document.querySelector(value)
    var testNumber = /^[0-9]+$/;
    if (testNumber.test(inputNumber.value)) {
        document.querySelector(selectorError).innerHTML = ""
        document.querySelector(selectorError).style.display = "none"
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputNumber.name + " " + "phải là số !"
        document.querySelector(selectorError).style.display = "block"
        return false;
    }
}

var checkEmail = function (selectorValue, selectorError) {
    var inputEmail = document.querySelector(selectorValue)
    var testEmail =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ;
    if (testEmail.test(inputEmail.value)) {
        document.querySelector(selectorError).innerHTML = ""
        document.querySelector(selectorError).style.display = "none"
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputEmail.name + " " + " không hợp lệ !"
        document.querySelector(selectorError).style.display = "block"
        return false;
    }
}

var checkLength = function (selectorValue, selectorError) {
    var inputPassword = document.querySelector(selectorValue)
    if (inputPassword.value.length >= 6 && inputPassword.value.length <= 32) {
        document.querySelector(selectorError).innerHTML = ""
        document.querySelector(selectorError).style.display = "none"
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputPassword.name + " " + "từ 6 đến 32 ký tự !"
        document.querySelector(selectorError).style.display = "block"
        return false;
    }
}

document.querySelector("#btnDangKy").onclick = checkValidation
