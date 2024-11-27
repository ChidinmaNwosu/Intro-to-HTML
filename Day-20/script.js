// 1.
const student = {
  name: "Tolu Oseni",
  age: 24,
  course: "Physics",
  grade: "A",
  isEnrolled: true,
};


// 2.
const studentDetailsContainer = document.querySelector(".student-details");

//3. 
studentDetailsContainer.style.backgroundColor = "lightgreen";
studentDetailsContainer.style.padding = "20px";

//4. 
    const studentElement = document.createElement("div");
    studentElement.innerHTML= `
    <p class="paragraph-margin"> Name: ${student.name}</p>
    <p class="paragraph-margin"> Age: ${student.age}</p>
    <p class="paragraph-margin"> Course: ${student.course}</p>
    <p class="paragraph-margin"> Grade: ${student.grade}</p>
    <p class="paragraph-margin">Enrolled: ${student.isEnrolled}</p>
    `;

// 5.
    studentElement.style.backgroundColor = "black";
    studentElement.style.borderRadius = "5px";
    studentElement.style.padding = "10px";
    studentElement.style.width = "100% ";
    studentElement.style.height="60%";
    studentElement.style.marginBlock = '5px';
    studentElement.style.color = "bisque";
    
//6.  
    studentDetailsContainer.appendChild(studentElement);