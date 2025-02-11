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

const messageForm = document.querySelector("#leave_message");
messageForm.addEventListener("submit", formFunction);

function formFunction(event) {
  event.preventDefault();

  const usersName = event.target.elements.usersName.value;
  const usersEmail = event.target.elements.usersEmail.value;
  const usersMessage = event.target.elements.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = document.querySelector("#messages_list");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a> ${usersName} </a> <a href="mailto:${usersEmail}"> ${usersEmail} </a> <span> ${usersMessage} </span>`;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", removeFunction);

  function removeFunction(event) {
    const entry = event.target.parentNode;
    entry.remove();
  }

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  event.target.reset();
}

fetch("https://api.github.com/users/duvonneb/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })
  .then((data) => {
    let repositories = data;
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector(".projects");

    // Iterate over the repositories array using a for loop
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.textContent = repositories[i].name; // Access the name property of the repository
      projectList.appendChild(project);
    }
    console.log(repositories);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
