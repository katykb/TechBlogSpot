const loginFormHandler = async (event) => {
    event.preventDefault();
  
    //changed userID to username to be consistent with what we were calling the user
    const username = document.querySelector("#user-name-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in");
      }
    }
  };
  

  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
  
  