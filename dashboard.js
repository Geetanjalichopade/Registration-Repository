/* =====================================================
   USER DASHBOARD
   GEETANJALI CHOPADE
   ===================================================== */


/* =====================================================
   GET REGISTERED USER INFORMATION
   ===================================================== */

const userName =
    localStorage.getItem("userName") || "Geetanjali";

const userEmail =
    localStorage.getItem("userEmail") || "Not available";

const userPhone =
    localStorage.getItem("userPhone") || "Not available";


/* =====================================================
   DISPLAY USER NAME
   ===================================================== */

const userNameElement =
    document.getElementById("userName");

const welcomeNameElement =
    document.getElementById("welcomeName");

const profileNameElement =
    document.getElementById("profileName");


if (userNameElement) {

    userNameElement.textContent =
        userName;

}


if (welcomeNameElement) {

    welcomeNameElement.textContent =
        userName;

}


if (profileNameElement) {

    profileNameElement.textContent =
        userName;

}


/* =====================================================
   DISPLAY EMAIL
   ===================================================== */

const profileEmailElement =
    document.getElementById("profileEmail");


if (profileEmailElement) {

    profileEmailElement.textContent =
        userEmail;

}


/* =====================================================
   DISPLAY MOBILE NUMBER
   ===================================================== */

const profilePhoneElement =
    document.getElementById("profilePhone");


if (profilePhoneElement) {

    profilePhoneElement.textContent =
        userPhone;

}


/* =====================================================
   USER AVATAR
   ===================================================== */

const avatar =
    document.getElementById("userAvatar");


if (avatar && userName.length > 0) {

    avatar.textContent =
        userName
            .charAt(0)
            .toUpperCase();

}


/* =====================================================
   LOGOUT FUNCTION
   ===================================================== */

function logoutUser() {

    /*
       Remove registered user information
    */

    localStorage.removeItem("userName");

    localStorage.removeItem("userEmail");

    localStorage.removeItem("userPhone");


    /*
       Go back to Login page
    */

    window.location.href =
        "index.html";

}


/* =====================================================
   NAVIGATION ACTIVE STATE
   ===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });


            this.classList.add("active");

        }
    );

});


/* =====================================================
   NOTIFICATION BUTTON
   ===================================================== */

const notificationButton =
    document.querySelector(
        ".notification-btn"
    );


if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        function () {

            alert(
                "You have no new notifications."
            );

        }
    );

}


/* =====================================================
   PAGE LOAD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Dashboard loaded successfully."
        );

    }
);