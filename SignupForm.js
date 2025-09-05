    function submitClick(e) {
      e.preventDefault();
    }

    // ✅ Name Validation
    function nameCheck() {
      const pattern = /^[A-Za-z\s]{3,30}$/;
      const input = document.querySelector("[name='name']").value;
      const error = document.querySelector(".name-error");
      const success = document.querySelector(".name-success");
      if (pattern.test(input)) {
        success.classList.add("show-success");
        error.classList.remove("show-error");
      } else {
        error.classList.add("show-error");
        success.classList.remove("show-success");
      }
    }

    // ✅ Phone Validation
    function phoneCheck() {
      const pattern = /^[6-9][0-9]{9}$/;
      const input = document.querySelector("[name='phone']").value;
      const error = document.querySelector(".phone-error");
      const success = document.querySelector(".phone-success");
      if (pattern.test(input)) {
        success.classList.add("show-success");
        error.classList.remove("show-error");
      } else {
        error.classList.add("show-error");
        success.classList.remove("show-success");
      }
    }

    // ✅ Email Validation
    function emailCheck() {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      const input = document.querySelector("[name='email']").value;
      const error = document.querySelector(".email-error");
      const success = document.querySelector(".email-success");
      if (pattern.test(input)) {
        success.classList.add("show-success");
        error.classList.remove("show-error");
      } else {
        error.classList.add("show-error");
        success.classList.remove("show-success");
      }
    }

    // ✅ Password Validation
    function passwordCheck() {
      const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      const input = document.querySelector("[name='password']").value;
      const error = document.querySelector(".password-error");
      const success = document.querySelector(".password-success");
      if (pattern.test(input)) {
        success.classList.add("show-success");
        error.classList.remove("show-error");
      } else {
        error.classList.add("show-error");
        success.classList.remove("show-success");
      }
    }

    // ✅ Password Show/Hide on hold
    function showPassword() {
      document.getElementById("password").type = "text";
    }
    function hidePassword() {
      document.getElementById("password").type = "password";
    }
