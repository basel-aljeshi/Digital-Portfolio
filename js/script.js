// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const skillBrushstrokes = {
    'Embedded Programming': './assets/brushstrokes/1x/indigo.png',
    'Java': './assets/brushstrokes/1x/light-blue.png',
    'Python': './assets/brushstrokes/1x/purple.png',
    'Tableau': './assets/brushstrokes/1x/orange.png',
    '3D Printing': './assets/brushstrokes/1x/yellow.png',
    'HTML/CSS': './assets/brushstrokes/1x/dark-green.png',
    'Javascript': './assets/brushstrokes/1x/royal-blue.png',
    'MATLAB': './assets/brushstrokes/1x/green.png',
    'SQL': './assets/brushstrokes/1x/gold.png',
    'Solidworks': './assets/brushstrokes/1x/red.png',
    'Figma': './assets/brushstrokes/1x/pink.png'
  };

  const projects = [
    {
      title: 'Project One',
      imgSrc: './assets/pic/projects-1.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com',
      skills: ['Solidworks', 'Figma', 'Python']
    },
    {
      title: 'Project Two',
      imgSrc: './assets/pic/projects-2.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com',
      skills: ['Tableau', 'Javascript', 'SQL']
    },
    {
      title: 'Project Three',
      imgSrc: './assets/pic/projects-3.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com',
      skills: ['Python', '3D Printing', 'Embedded Programming']
    },
    {
      title: 'Project Four',
      imgSrc: './assets/pic/projects-4.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com',
      skills: ['Solidworks', 'Tableau', 'SQL']
    },
    {
      title: 'Project Five',
      imgSrc: './assets/pic/projects-5.png',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://github.com',
      skills: ['Java', 'Python', 'SQL']
    }
  ];

  const projectsContainer = document.querySelector('.projects-container');
  projectsContainer.innerHTML = ''; // Clear any existing content

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
      <div class="skills-container">
        ${project.skills.map(skill => `<div class="skill" style="background-image: url('${skillBrushstrokes[skill]}')">${skill}</div>`).join('')}
      </div>
    `;
    projectsContainer.appendChild(projectCard);
  });
});
