document.getElementById('form-container').addEventListener('submit', function(event){
    event.preventDefault();

   //Get form values...
    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const birthDate = document.getElementById('birthdate').value.trim();
    const gender = document.getElementById('gender').value.trim();

    //validate form fields
    if(fullName === '' || email === '' || password === '' || phoneNumber === '' || birthDate === '' ||gender ===''){
        alert('All fields are required');
        return;
    }

    if (fullName.split(' ').length < 2){
        alert('Full name must include both first and last name.');
        return;
    }
   if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (phoneNumber.length < 11) {
        alert('Phone number must be at least 11 digits long.');
        return;
    }
    //If all fields are filled and validated, submit form...
    alert('Form submitted successfully');
});






