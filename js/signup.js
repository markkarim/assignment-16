var userNameCreate = document.getElementById("usernamecreate");
var userEmailCreate = document.getElementById("useremailcreate");
var userPasswordCreate = document.getElementById("userpasswordcreate");
var dataContainer = [];

document.getElementById("signup").addEventListener("click", function () {
  signup();
});

function signup() {
  var exist = false;

  if (validationSignUp() == true) {
    for (var i = 0; i < dataContainer.length; i++) {
      if (
        dataContainer[i].uEmail.toLowerCase() ===
        userEmailCreate.value.toLowerCase()
      ) {
        exist = true;
        clearform();
        document.getElementById("exit").classList.replace("d-none", "d-block");
        document
          .getElementById("success")
          .classList.replace("d-block", "d-none");
      }
    }

    if (exist == false) {
      var data = {
        uName: userNameCreate.value,
        uEmail: userEmailCreate.value,
        uPassword: userPasswordCreate.value,
      };
      dataContainer.push(data);
      localStorage.setItem("data", JSON.stringify(dataContainer));
      clearform();
    }
  }
}

function clearform() {
  userNameCreate.value = null;
  userEmailCreate.value = null;
  userPasswordCreate.value = null;
}

function validationSignUp() {
  if (
    userNameCreate.value == "" ||
    userEmailCreate.value == "" ||
    userPasswordCreate.value == ""
  ) {
    document.getElementById("errorr").classList.replace("d-none", "d-block");
    document.getElementById("success").classList.replace("d-block", "d-none");

    return false;
  } else {
    document.getElementById("success").classList.replace("d-none", "d-block");
    document.getElementById("exit").classList.replace("d-block", "d-none");
    document.getElementById("errorr").classList.replace("d-block", "d-none");

    return true;
  }
}

document.getElementById("index").addEventListener("click", function () {
  window.location.href = "index.html";
});
