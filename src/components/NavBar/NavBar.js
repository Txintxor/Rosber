import { useAuth0 } from "@auth0/auth0-react";

import {
  NaviBar,
  NavLinks,
  Listed,
  NavMenuIcon,
} from "../styled-c/styled-components.js";

const NavBar = () => {
  const element = document.querySelector("#navMenu");

  const toggle = () => {
    if (element.style.display === "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  };

  const { logout } = useAuth0();

  return (
    <NaviBar>
      <a id="navLogo" href="/">
        NavBar Logo
      </a>
      <NavLinks id="navMenu">
        <Listed>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>
        </Listed>
        <Listed>
          <a href="/Ficha">Crea ficha</a>
        </Listed>
        <Listed>
          <a href="/Produccion">Listas de producción</a>
        </Listed>
        
        <Listed>
          <a href="/Recetas">Recetas</a>
        </Listed>
      </NavLinks>
      <NavMenuIcon onClick={toggle}>
        <div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </NavMenuIcon>
    </NaviBar>
  );
};

export default NavBar;
