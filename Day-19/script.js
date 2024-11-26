//1.Create your array of objects containing people's information.
const people = [
    {name :'Alice', age: 24, job: 'Engineer',},
    {name:'Bob', age: 23, job: 'Designer',},
    {name: 'Charlie', age: 25, job: 'Police',},
    {name:'David', age: 22, job: 'Doctor',},
    {name: 'Eve', age: 21, job: 'Teacher',},
];

//2. Get the people-list container element, by selecting the div with class people-list.
const peopleListContainer = document.querySelector('.people-list');

//3. Add styles to the peopleListContainer element.
peopleListContainer.style.border = "1px solid black"; 
peopleListContainer.style.padding = "10px"; 
peopleListContainer.style.backgroundColor= "beige"; 

//4. Loop through the array of people and create a div element for each person.
for (let i = 0; i < people.length; i++) {
    const person = people[i]; // Get the current person
    const personElement = document.createElement('div'); // Create a div element for each person
    personElement.innerHTML= `
    <h2>${person.name}</h2>
    <p>Age: ${person.age}</p>
    <p>Job: ${person.job}</p>`; // Set the innerHTML of the div element for each person

//5. Add styles to each person element
    personElement.style.border = '1px solid black';
    personElement.style.padding = '10px';
    personElement.style.backgroundColor = 'white';
    personElement.style.marginBottom = '10px';
    personElement.style.width = '100%';

//6. Append the div element containing each person to the peopleListContainer
peopleListContainer.appendChild(personElement); 
}