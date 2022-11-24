import SocialNetwork from "./SocialNetwork";
import Information from "./Information";

import Avatar from "../img/eu.jpg";
import Curriculo from "../img/Currículo_Camilla_Santos.pdf";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Camilla Santos" />
      <p className="title">Desenvolvedora Front-end</p>
      <SocialNetwork />
      <Information />
      <a href={Curriculo} className="btn1" download>
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;