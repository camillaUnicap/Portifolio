import { Link } from "react-router-dom";

const Projects = () => {
    return (
      <section className="projects-container">
        <h2>Projetos</h2>
        <p>
          Durante a minha trejetória de estudo aprendendo as linguagem de programação front-end 
          realizei varias atividades para meu aprendizado, como: Calculadora em Javascript,
          Gerenciamento de inscrição e criação de eventos em Angular e Todo List em React.
        <strong>Quer ver como funciona o TodoList na pratica? só clicar abaixo... </strong>
        </p>
        <a href="#" className="btn"><Link to="/projetos">
          Ver Projetos
        </Link></a>
      </section>
    );
  };
  
  export default Projects;