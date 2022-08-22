import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

import {
  LogoutButton,
  NaviBar,
  NavLinks,
  Listed,
  NavMenuIcon,
} from "./NavBar.styled";

const NavBar = () => {
  const { logout, user } = UserAuth();
  const [tog, setTog] = useState(false);
  const navigate = useNavigate();


  const element = document.querySelector("#navMenu");

  const toggle = () => {
    if (!tog) {
      element.style.display = "flex";
      setTog(true);
    } else {
      element.style.display = "none";
      setTog(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/Login");
    } catch (error) {
      console.log(error.message);
    }
  };




  return (
    <NaviBar>
      <a id="navLogo" href="/">
        NavBar Logo
      </a>
      <NavLinks id="navMenu">
        <Listed>
          <a href="/Ficha">Crea ficha</a>
        </Listed>
        <Listed>
          <a href="/Produccion">Crea lista de producción</a>
        </Listed>
        <Listed>
          <a href="/Recetas">Recetas</a>
        </Listed>
        {!!user === false && (
          <Listed>
            <a href="/Login">Login</a>
          </Listed>
        )}
        {!!user === false && (
          <Listed>
            <a href="/Registre">Registro</a>
          </Listed>
        )}
        {!!user && (
          <Listed>
            <LogoutButton onClick={handleLogout}>Desconecta</LogoutButton>
          </Listed>
        )}
        {user && <Listed>
          <p>{user.email}</p>
        </Listed>}
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
