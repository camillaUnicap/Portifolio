import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiAngularSimple,
    DiReact,
  } from "react-icons/di";
  
  import "../styles/components/technologies.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, sobre: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web." },
    { id: "css", name: "CSS3", icon: <DiCss3 /> , sobre: "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web."},
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> , sobre:"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."},
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> , sobre:"Node.js é um software de código aberto, multiplataforma e que permite a execução de códigos JavaScript fora de um navegador web."},
    { id: "angular", name: "Angular", icon: <DiAngularSimple /> , sobre:"Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript."},
    { id: "react", name: "React", icon: <DiReact /> , sobre:"O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."},
  ];
  
  const Technologies = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.sobre}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Technologies;