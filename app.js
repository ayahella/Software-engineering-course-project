document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", function() {
      const selectedRole = document.getElementById("roles").value;
      window.location.href = "./Modules/Login/login.html?role=" + encodeURIComponent(selectedRole);

      if(selectedRole == "Donor")
        window.location.href = "./Modules/Donor/donorRole.html";
      else if(selectedRole == "Organization Respresentative")
        window.location.href = "./Modules/Organization/registerOrg.html";
    });
  });
  