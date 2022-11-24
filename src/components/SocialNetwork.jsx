import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialNetwork.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> , caminho:"https://www.linkedin.com/in/camilla-santos-9788251ab/"},
  { name: "github", icon: <FaGithub /> , caminho:"https://github.com/camillaUnicap" },
  { name: "instagram", icon: <FaInstagram />, caminho:"https://www.instagram.com/camilla.taina.santos/" },
];

const SocialNetwork = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.caminho} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetwork;