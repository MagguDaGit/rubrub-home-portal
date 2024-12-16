import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js' 


const apps = [
  {
    name: 'Rock Paper Scissor Simulations API',
    description: 'Minimal high performance rock paper simulator API',
    githubLink: 'https://github.com/MagguDaGit/go-paper-scissor',
    navLink: '/rps/simulation/random?amount=10'  
  },
]

document.querySelector('#app-grid').innerHTML = apps
  .map(app => {
    return `
      <section class="app-item">
        <h3>${app.name}</h3>
        <p>${app.description}</p>
        <footer>
        <a href="${app.githubLink}" target="_blank">GitHub</a>
        <a href="${app.navLink}">Try API</a>
        </footer>
       </section>
    `;
  })
  .join(''); // Combine all elements into a single string
