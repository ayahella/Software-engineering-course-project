import { donors } from "../Admin/DonorRequests/donorRequestsData";
document.getElementById('doctorRegister').addEventListener('submit', function(event) {

    event.preventDefault();
    var role ;
    
            role = "Dr. ";
            const name = role + document.getElementById('firstName').value + document.getElementById('lastName').value;
            const department = document.getElementById('department').value;
            const email = document.getElementById('email').value;
            const phoneNumber = document.getElementById('contactNumber').value;
            const clinicLocation = document.getElementById('clinicLocation').value;
            const maxCases = document.getElementById('cases').value;

            const newDonor = {
                name: name,
                department: department,
                email: email,
                phoneNumber: phoneNumber,
                clinic_location: clinicLocation,
                max_cases: maxCases,
                status: "none"
            };

            donors.push(newDonor);

            console.log('New donor added:', newDonor);
});