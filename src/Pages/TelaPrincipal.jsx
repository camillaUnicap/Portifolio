

// import "./styles/components/app.sass";
import MainContent from "../components/Main";
import Sidebar from "../components/Sidebar";
import "../styles/components/app.sass";

function TelaPrincipal() {
  return (
    <div id="portfolio">
      <h1>Camilla Santos</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default TelaPrincipal;