function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

}

// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: 'Project One',
      imgSrc: './assets/pic/projects-1.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com'
    },
    {
      title: 'Project Two',
      imgSrc: './assets/pic/projects-2.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com'
    },
    {
      title: 'Project Three',
      imgSrc: './assets/pic/projects-3.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com'
    },
    {
      title: 'Project Four',
      imgSrc: './assets/pic/projects-4.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com'
    },
    {
      title: 'Project Five',
      imgSrc: './assets/pic/projects-5.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com'
    }
  ];

  const projectsContainer = document.querySelector('.projects-container');

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-details-container', 'color-container');
    projectCard.innerHTML = `
      <div class="article-container">
        <img src="${project.imgSrc}" alt="${project.title}" class="project-img"/>
      </div>
      <h2 class="experience-sub-title project-title">${project.title}</h2>
      <div class="btn-container">
        <button class="btn btn-color-2 project-btn" onclick="location.href='${project.githubLink}'">Github</button>
        <button class="btn btn-color-2 project-btn" onclick="location.href='${project.liveDemoLink}'">Live Demo</button>
      </div>
    `;
    projectsContainer.appendChild(projectCard);
  });
});
