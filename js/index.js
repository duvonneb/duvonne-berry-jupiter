//get current date
let today = new Date();

//get current year
let thisYear = today.getFullYear();

//create footer element
const footer = document.querySelector("footer");

//create new paragraph element
const copyright = document.createElement("p");
copyright.innerHTML = `Duvonne Berry &copy; ${thisYear}`;
footer.appendChild(copyright);

//array containing a list skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];

const skillsSection = document.querySelector("#Skills");

//assign skillsList to the ul element
const skillsList = skillsSection.lastElementChild;

//list out skills array
for (let i = 0; i < skills.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = skills[i];
  skillsList.appendChild(listItem);
}

skillsSection.appendChild(skillsList);
