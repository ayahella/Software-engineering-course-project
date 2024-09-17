function submit(){

    if(document.getElementById('department').value == "doctor")
        window.location.href = "../Donor/registerDoctor.html"

    else if(document.getElementById('department').value == "regularDonor")
        window.location.href = "../Donor/registerDonor.html";

    else
        window.location.href = "../Donor/registerTeacher.html"
}