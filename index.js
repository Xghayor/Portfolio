document.addEventListener('DOMContentLoaded', function() {

const hamburger = document.querySelector('.material-icons');
const navbarItems = document.querySelector('.navbar-items');
const myLogo = document.querySelector('.logo');
const navbarItemLinks = document.querySelectorAll('.navbar-items li a');

hamburger.addEventListener('click', () => {
  toggleMenu();
});

navbarItemLinks.forEach((link) => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

function toggleMenu() {
  if (hamburger.textContent === 'menu') {
    hamburger.textContent = 'close';
    navbarItems.style.display = 'block';
    myLogo.style.visibility = 'hidden';
  } else {
    hamburger.textContent = 'menu';
    navbarItems.style.display = 'none';
    myLogo.style.visibility = 'visible';
  }
}


// Popup-window


var projects = [
  {
    name: "Keeping track of hundreds  of components website",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: "./img/main (1).png",
    technologies: ["HTML", "Bootstrap", "Ruby on Rails"],
    liveVersion: "https://project1-live-version.com",
    source: "https://project1-source-code.com"
  },
  {
    name: "Multi-Post Stories",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    featuredImage: "./img/grid-1.png",
    technologies: ["HTML", "Bootstrap", "Ruby on Rails"],
    liveVersion: "https://project2-live-version.com",
    source: "https://project2-source-code.com"
  },
  {
    name: "Multi-Post Stories",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    featuredImage: "./img/grid-2.png",
    technologies: ["HTML", "Bootstrap", "Ruby on Rails"],
    liveVersion: "https://project2-live-version.com",
    source: "https://project2-source-code.com"
  },
  {
    name: "Multi-Post Stories",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    featuredImage: "./img/grid-3.png",
    technologies: ["HTML", "Bootstrap", "Ruby on Rails"],
    liveVersion: "https://project2-live-version.com",
    source: "https://project2-source-code.com"
  },
  {
    name: "Multi-Post Stories",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    featuredImage: "./img/grid-4.png",
    technologies: ["HTML", "Bootstrap", "Ruby on Rails"],
    liveVersion: "https://project2-live-version.com",
    source: "https://project2-source-code.com"
  },
  {
    name: "Multi-Post Stories",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    featuredImage: "./img/grid-5.png",
    technologies: ["HTML", "Bootstrap", "Ruby on Rails"],
    liveVersion: "https://project2-live-version.com",
    source: "https://project2-source-code.com"
  },
  {
    name: "Multi-Post Stories",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.",
    featuredImage: "./img/grid-6.png",
    technologies: ["HTML", "Bootstrap", "Ruby on Rails"],
    liveVersion: "https://project2-live-version.com",
    source: "https://project2-source-code.com"
  },
 ];



const projectOneButton = document.getElementById("project-one");
const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modal-title");
const  modalDescription = document.getElementById("modal-description");
const  modalTechnologies = document.getElementById("modal-stacks");
const btnLive= document.getElementById("see-live")
const btnSources= document.getElementById("see-sources")
var modalContent = modal.querySelector('.modal-content');

let technologies = projects[0].technologies;



projectOneButton.addEventListener("click", function() {

  modalImage.src = projects[0].featuredImage; 
  modalTitle.textContent = projects[0].name;
  modalDescription.textContent = projects[0].description;

  modalTechnologies.innerHTML = "";

  technologies.forEach((technology) => {
  let li = document.createElement("li");
  li.textContent = technology;
  modalTechnologies.appendChild(li);

});

  modal.style.display = "block";

});

const closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function() {
  
  modal.style.display = 'none';
  
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


// Popup grids
const gridModal = document.getElementById("grid-modal");
const gridImage = document.getElementById("grid-image");
const gridTitle = document.getElementById("item-title");
const  gridModalDesc = document.getElementById("grid-desc");
const  gridStacks = document.getElementById("item-stacks");



const firstBtn = document.querySelector('.first-btn');


firstBtn.addEventListener('click', function(){
  gridImage.src = projects[1].featuredImage; 
  gridTitle.textContent = projects[1].name;
  gridModalDesc.textContent = projects[1].description;

  
  gridStacks.innerHTML = "";

  technologies.forEach((technology) => {
    let li = document.createElement("li");
    li.textContent = technology;
    gridStacks.appendChild(li);
  });

  gridModal.style.display = "block";
  
});

const gridButton = document.getElementsByClassName("grid-close")[0];
gridButton.addEventListener("click", function() {
  gridModal.style.display = "none";

});



window.addEventListener('click', function(event) {
  if (event.target == gridModal) {
    gridModal.style.display = 'none';
  }
});

for (let i = 2; i <= 6; i++) {
  const gridNumber = i;
  const gridModalBtn = document.getElementById(`grid-${gridNumber}`);

  gridModalBtn.addEventListener('click', function () {
    gridImage.src = projects[i].featuredImage; 
  gridTitle.textContent = projects[i].name;
  gridModalDesc.textContent = projects[1].description;

  
  gridStacks.innerHTML = "";

  technologies.forEach((technology) => {
    let li = document.createElement("li");
    li.textContent = technology;
    gridStacks.appendChild(li);
  });

  gridModal.style.display = "block";
  });
}



});
