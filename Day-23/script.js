//1. Add an event listener to toggle between dark and light modes
const toggleButton = document.getElementById('btn');
const body = document.body;

// 2. Event listener for the button
toggleButton.addEventListener('click',function(event){
    alert('Toggle button clicked');
    event.preventDefault();

//3. Check if the body has the 'light-mode' class
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
      }

     // Toggle button class based on the body class
      if (body.classList.contains('dark-mode')) {
        toggleButton.classList.remove('button-dark');
        toggleButton.classList.add('button-light');
      } else {
        toggleButton.classList.remove('button-light');
        toggleButton.classList.add('button-dark');
      }
});
