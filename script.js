/* =====================================================
   PROFESSIONAL LOGIN PAGE
   JAVASCRIPT
   ===================================================== */


/* ================= LOGIN FORM ================= */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* ================= GET VALUES ================= */

    const email = document
        .getElementById("email")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value
        .trim();


    /* ================= ERROR ELEMENTS ================= */

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");


    /* ================= CLEAR OLD ERRORS ================= */

    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;


    /* ================= EMAIL VALIDATION ================= */

    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        valid = false;

    }
    else if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    /* ================= PASSWORD VALIDATION ================= */

    if (password === "") {

        passwordError.textContent =
            "Please enter your password.";

        valid = false;

    }
    else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        valid = false;
    }


    /* ================= LOGIN SUCCESS ================= */

    if (valid) {

        showToast(
            "Login Successful",
            "Welcome back! Opening dashboard..."
        );


        /* ================= REDIRECT TO DASHBOARD ================= */

        setTimeout(function () {

            console.log("Email:", email);
            console.log("Login successful");

            window.location.href = "dashboard.html";

        }, 1000);

    }

});


/* ================= EMAIL VALIDATION ================= */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


/* ================= SHOW / HIDE PASSWORD ================= */

function togglePassword() {

    const password =
        document.getElementById("password");

    const eyeIcon =
        document.getElementById("eyeIcon");


    if (password.type === "password") {

        password.type = "text";

        eyeIcon.classList.remove("fa-eye");

        eyeIcon.classList.add("fa-eye-slash");

    }
    else {

        password.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");

        eyeIcon.classList.add("fa-eye");

    }

}


/* ================= FORGOT PASSWORD ================= */

function forgotPassword(event) {

    event.preventDefault();

    showToast(
        "Forgot Password",
        "Password reset option selected."
    );

}


/* ================= CREATE ACCOUNT ================= */

function createAccount(event) {

    event.preventDefault();

    showToast(
        "Create Account",
        "Registration page can be connected here."
    );

}


/* ================= SOCIAL LOGIN ================= */

function socialLogin(platform) {

    showToast(
        platform + " Login",
        "This feature can be connected later."
    );

}


/* ================= TOAST ================= */

function showToast(title, message) {

    const toast =
        document.getElementById("toast");

    const toastTitle =
        document.getElementById("toastTitle");

    const toastMessage =
        document.getElementById("toastMessage");


    toastTitle.textContent = title;

    toastMessage.textContent = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}


/* ================= REMEMBER ME ================= */

const remember =
    document.getElementById("remember");


remember.addEventListener("change", function () {

    if (this.checked) {

        localStorage.setItem(
            "rememberMe",
            "true"
        );

    }
    else {

        localStorage.removeItem(
            "rememberMe"
        );

    }

});