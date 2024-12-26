const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".Portfolio-content .row"); // Get all project rows
  const viewMoreWrapper = document.getElementById("view-more-wrapper");
  const viewMoreBtn = document.getElementById("view-more-btn");
  const viewLessBtn = document.getElementById("view-less-btn");
  const portfolioSection = document.getElementById("portfolio"); // Reference to the portfolio section

  const visibleProjects = 6; // Number of projects to show initially

  // Initially hide projects after the 6th one
  projects.forEach((project, index) => {
    if (index >= visibleProjects) {
      project.style.display = "none";
    }
  });

  // Show "View More" button only if there are more than 6 projects
  if (projects.length > visibleProjects) {
    viewMoreWrapper.style.display = "flex"; // Show the button
  }

  // Handle "View More" button click
  viewMoreBtn.addEventListener("click", function () {
    // Show all projects
    projects.forEach((project) => {
      project.style.display = "block";
    });

    // Hide the "View More" button and show "View Less"
    viewMoreBtn.style.display = "none";
    viewLessBtn.style.display = "inline-block"; // Show the "View Less" button
  });

  // Handle "View Less" button click
  viewLessBtn.addEventListener("click", function () {
    // Hide the additional projects (those after the first 6)
    for (let i = visibleProjects; i < projects.length; i++) {
      projects[i].style.display = "none";
    }

    // Show the "View More" button and hide "View Less"
    viewMoreBtn.style.display = "inline-block";
    viewLessBtn.style.display = "none";

    // Scroll to the top of the portfolio section
    portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects-container");
  const toggleProjectsBtn = document.getElementById("toggle-projects-btn");
  const projectsSection = document.getElementById("projects"); // Reference to the projects section

  // Get all the project items in the container
  const projects = Array.from(projectsContainer.children);
  const visibleProjects = 6;

  // Check if there are more than 6 projects
  if (projects.length > visibleProjects) {
    // Initially hide projects beyond the first 6
    projects.forEach((project, index) => {
      if (index >= visibleProjects) {
        project.style.display = "none";
      }
    });

    // Show or hide projects when clicking the button
    toggleProjectsBtn.addEventListener("click", () => {
      // Toggle visibility of projects beyond the first 6
      let isAllVisible = Array.from(projects).every(project => project.style.display === "block");

      if (isAllVisible) {
        // Collapse to 6 projects
        projects.forEach((project, index) => {
          if (index >= visibleProjects) {
            project.style.display = "none";
          }
        });
        toggleProjectsBtn.textContent = "View More";
        
        // Scroll to the top of the project section
        projectsSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Show all projects
        projects.forEach(project => {
          project.style.display = "block";
        });
        toggleProjectsBtn.textContent = "View Less";
      }
    });
  } else {
    // If there are 6 or fewer projects, hide the button
    toggleProjectsBtn.style.display = "none";
  }
});







// Ensure the page is loaded before applying scroll behavior
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const links = document.querySelectorAll(".navlist a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default anchor behavior

      // Get the target section ID from the href attribute
      const targetID = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);

      // Scroll to the target element with an offset of 50px (or adjust to your liking)
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust this value to control the extra space
        behavior: "smooth" // Smooth scrolling
      });
    });
  });
});
