const projects = [
    {
      name: "Password generator",
      desc: "portfolio website",
      img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      url: "https://password-generator-three-black-11.vercel.app"
    },
    {
      name: "Currency Converter (React)",
      desc: "React + Vite app for real-time currency conversion.",
      img: "images/pexels-pixabay-164527.jpg",
      url: "https://currency-two-tawny.vercel.app"
    },
  
    {
      name: "Redux Todo App",
      desc: "A classic todo list implementing state management with Redux.",
      img: "images/pexels-suzyhazelwood-1226398.jpg",
      url: "https://reduxtodo-gamma.vercel.app"
    }
  ];
  
  function renderProjects() {
    const container = document.getElementById("project-list");
    container.innerHTML = ""; // clear before rendering
    projects.forEach(p => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <a href="${p.url}" target="_blank">Live Demo</a>
        </div>
      `;
      container.appendChild(div);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderProjects);