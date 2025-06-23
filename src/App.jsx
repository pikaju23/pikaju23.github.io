import React, { useState } from 'react';
import './style.css';

function App() {
  const [showSkills, setShowSkills] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showProjects, setShowProjects] = useState(false); // ← novo estado

  return (
    <div className="container">
      <img src="/imagem.pp.jpeg" alt="Foto de perfil" className="profile-img" />
      <h1>Victor Eduardo Moraes</h1>

      <p className="phone">
        <img src="/whatsapp.png" alt="WhatsApp" className="icon" />
        19 986026884
      </p>
      <p className="email">
     <img src="/gmail.png" alt="E-mail" className="icon" />
      victor01928374gs@gmail.com
      </p>
      <p className="stack">Desenvolvedor de sistemas Python, MySQL, Java etc</p>

      {/* Botão Habilidades */}
      <button className="main-btn" onClick={() => setShowSkills(!showSkills)}>
        Minhas Habilidades
      </button>
      {showSkills && (
        <div className="button-column">
          <button className="skill-btn">Word</button>
          <button className="skill-btn">PowerPoint</button>
          <button className="skill-btn">Excel</button>
        </div>
      )}

      {/* Botão Redes Sociais */}
      <button className="main-btn" onClick={() => setShowSocials(!showSocials)}>
        Redes Sociais
      </button>
      {showSocials && (
        <div className="button-column">
          <a href="https://instagram.com/victor0928" target="_blank" rel="noopener noreferrer">
            <button className="social-btn">Instagram</button>
          </a>
          <a href="https://github.com/pikaju23" target="_blank" rel="noopener noreferrer">
            <button className="social-btn">GitHub</button>
          </a>
        </div>
      )}

      {/* Botão Cursos */}
      <button className="main-btn" onClick={() => setShowCourses(!showCourses)}>
        Cursos
      </button>
      {showCourses && (
        <div className="button-column">
          <p className="course-item">📘 Cursando Análise e Desenvolvimento de Sistemas — E.E. Manoel Inácio da Silve</p>
          <p className="course-item">📗 Gestão Administrativa — Microcamp (há 3 anos)</p>
          <p className="course-item">📙 Inglês — Professor particular</p>
        </div>
      )}

      {/* Botão Projetos */}
      <button className="main-btn" onClick={() => setShowProjects(!showProjects)}>
        Projetos
      </button>
      {showProjects && (
        <div className="button-column">
          <a href="https://github.com/pikaju23/calculadora-react" target="_blank" rel="noopener noreferrer">
            <button className="social-btn">🧮 Calculadora em React</button>
          </a>
          <a href="https://github.com/pikaju23/formulario-login" target="_blank" rel="noopener noreferrer">
            <button className="social-btn">🔐 Formulário de Login</button>
          </a>
          <a href="https://github.com/pikaju23/portfolio" target="_blank" rel="noopener noreferrer">
            <button className="social-btn">🌐 Meu Portfólio</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
