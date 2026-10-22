/* =====================================================
   PROFESSIONAL REGISTRATION VALIDATION
   GEETANJALI
   ===================================================== */


/* ================= FORM ================= */

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* ================= GET VALUES ================= */

        const fullName =
            document.getElementById("fullName")
                .value.trim();

        const email =
            document.getElementById("email")
                .value.trim();

        const phone =
            document.getElementById("phone")
                .value.trim();

        const password =
            document.getElementById("password")
                .value;

        const confirmPassword =
            document.getElementById("confirmPassword")
                .value;

        const terms =
            document.getElementById("terms")
                .checked;


        /* ================= ERROR ELEMENTS ================= */

        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const phoneError =
            document.getElementById("phoneError");

        const passwordError =
            document.getElementById("passwordError");

        const confirmPasswordError =
            document.getElementById(
                "confirmPasswordError"
            );

        const termsError =
            document.getElementById("termsError");


        /* ================= CLEAR OLD ERRORS ================= */

        nameError.textContent = "";

        emailError.textContent = "";

        phoneError.textContent = "";

        passwordError.textContent = "";

        confirmPasswordError.textContent = "";

        termsError.textContent = "";


        let valid = true;


        /* =====================================================
           FULL NAME VALIDATION
           ===================================================== */

        if (fullName === "") {

            nameError.textContent =
                "Please enter your full name.";

            valid = false;

        }

        else if (fullName.length < 3) {

            nameError.textContent =
                "Name must contain at least 3 characters.";

            valid = false;

        }

        else if (!/^[a-zA-Z ]+$/.test(fullName)) {

            nameError.textContent =
                "Name can contain only letters.";

            valid = false;

        }


        /* =====================================================
           EMAIL VALIDATION
           ===================================================== */

        if (email === "") {

            emailError.textContent =
                "Please enter your email address.";

            valid = false;

        }

        else if (!validateEmail(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;

        }


        /* =====================================================
           MOBILE NUMBER VALIDATION
           ===================================================== */

        if (phone === "") {

            phoneError.textContent =
                "Please enter your mobile number.";

            valid = false;

        }

        else if (!/^[6-9][0-9]{9}$/.test(phone)) {

            phoneError.textContent =
                "Enter a valid 10-digit mobile number.";

            valid = false;

        }


        /* =====================================================
           PASSWORD VALIDATION
           ===================================================== */

        if (password === "") {

            passwordError.textContent =
                "Please create a password.";

            valid = false;

        }

        else if (password.length < 8) {

            passwordError.textContent =
                "Password must contain at least 8 characters.";

            valid = false;

        }

        else if (!/[A-Z]/.test(password)) {

            passwordError.textContent =
                "Password must contain one uppercase letter.";

            valid = false;

        }

        else if (!/[a-z]/.test(password)) {

            passwordError.textContent =
                "Password must contain one lowercase letter.";

            valid = false;

        }

        else if (!/[0-9]/.test(password)) {

            passwordError.textContent =
                "Password must contain one number.";

            valid = false;

        }


        /* =====================================================
           CONFIRM PASSWORD VALIDATION
           ===================================================== */

        if (confirmPassword === "") {

            confirmPasswordError.textContent =
                "Please confirm your password.";

            valid = false;

        }

        else if (password !== confirmPassword) {

            confirmPasswordError.textContent =
                "Passwords do not match.";

            valid = false;

        }


        /* =====================================================
           TERMS & CONDITIONS VALIDATION
           ===================================================== */

        if (!terms) {

            termsError.textContent =
                "Please accept the Terms & Conditions.";

            valid = false;

        }


        /* =====================================================
           SUCCESS
           ===================================================== */

        if (valid) {

            showSuccessMessage();

        }

    }
);


/* =====================================================
   EMAIL VALIDATION FUNCTION
   ===================================================== */

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* =====================================================
   PASSWORD SHOW / HIDE
   ===================================================== */

function togglePassword(
    inputId,
    iconId
) {

    const password =
        document.getElementById(inputId);

    const icon =
        document.getElementById(iconId);


    if (password.type === "password") {

        password.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    }

    else {

        password.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }

}


/* =====================================================
   SUCCESS MESSAGE
   ===================================================== */

function showSuccessMessage() {

    /* =================================================
       GET USER INFORMATION
       ================================================= */

    const fullName =
        document.getElementById("fullName")
            .value.trim();

    const email =
        document.getElementById("email")
            .value.trim();

    const phone =
        document.getElementById("phone")
            .value.trim();


    /* =================================================
       SAVE USER INFORMATION
       ================================================= */

    localStorage.setItem(
        "userName",
        fullName
    );

    localStorage.setItem(
        "userEmail",
        email
    );

    localStorage.setItem(
        "userPhone",
        phone
    );


    /* =================================================
       SUCCESS MESSAGE
       ================================================= */

    const successMessage =
        document.getElementById(
            "successMessage"
        );


    successMessage.classList.add("show");


    /*
       Show success message for 2 seconds
    */

    setTimeout(function () {

        successMessage.classList.remove("show");


        /*
           After registration,
           open User Dashboard.
        */

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 300);

    }, 2000);

}