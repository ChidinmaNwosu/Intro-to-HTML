const h2 = document.getElementById('changeText');
const button = document.getElementById('btn')

button.addEventListener('click', function(event){
    alert(h2.textContent = 'Yes! I love Javascript');
});

h2.addEventListener('mouseover', function(event){
    h2.textContent = 'Welcome to Javascript!';
});
