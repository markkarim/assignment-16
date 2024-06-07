var userEmail = document.getElementById("useremail");
var userPassword = document.getElementById("userpassword");
dataContainer = [];
dataContainer = JSON.parse(localStorage.getItem("data"));

function into() {
  if (userEmail.value == "" || userEmail.value == "") {
    document.getElementById("errorr").classList.replace("d-none", "d-block");
    document.getElementById("incorrect").classList.replace("d-block", "d-none");
  } else {
    for (var i = 0; i < dataContainer.length; i++) {
      if (
        dataContainer[i].uEmail.toLowerCase() ==
          userEmail.value.toLowerCase() &&
        dataContainer[i].uPassword.toLowerCase() ==
          userPassword.value.toLowerCase()
      ) {
        localStorage.setItem("name", JSON.stringify(dataContainer[i].uName));

        window.location = "/welcome.html";

        document
          .getElementById("incorrect")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("errorr")
          .classList.replace("d-block", "d-none");

        document
          .getElementById("incorrect")
          .classList.replace("d-none", "d-block");
      }
    }
  }
}

function clearform() {
  userEmail.value = null;
  userPassword.value = null;
}

document.getElementById("Login").addEventListener("click", function () {
  into();
});

document.getElementById("create").addEventListener("click", function () {
  window.location = "/signup.html";
});
