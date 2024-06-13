function onFormSubmit() {
    const student = {
        name: document.getElementById('studentName').value,
        id: document.getElementById('studentID').value,
        phone: document.getElementById('phoneNumber').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        branch: document.getElementById('branch').value,
        department: document.getElementById('department').value,
        fees: document.getElementById('fees').value
    };

    // Store the student data in sessionStorage
    sessionStorage.setItem('studentData', JSON.stringify(student));

    // Redirect to the display page
    window.location.href = 'display.html';
}



