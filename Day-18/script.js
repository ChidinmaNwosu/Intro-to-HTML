const button = document.getElementById('btn');

// function randomColor(){
//     const letters = "0123456789ABCDEF";
//     let color = '#';
//     for(let i=0; i<6; i++){
//         color += letters[Math.floor(Math.random()* 16)];
//     }
//     return color;
// }

// button.addEventListener('click', function(event){
//     document.body.style.backgroundColor = randomColor();
// });

button.addEventListener('click', function(event){
    document.body.style.backgroundColor = 'yellow';
});