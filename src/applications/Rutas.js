import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

// import PrivateRoute from "./PrivateRoute";

import Home from "../components/Home/Home";
import Ficha from "../components/Ficha/Ficha";
import Recetas from "../components/Recetas/Recetas";
import EscEvento from "../components/Escandallo/EscEvento";
import EscPartida from "../components/Escandallo/EscPartida";
import Admin from "../components/Admin/Admin";
import Page404 from "../components/Page404/Page404";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Ficha" element={<Ficha/>} />
        <Route exact path="/Recetas" element={<Recetas/>} />
        <Route exact path="/EscEvento" element={<EscEvento/>} />
        <Route exact path="/EscPartida" element={<EscPartida/>} />
        <Route exact path="/Admin" element={<Admin/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default withAuthenticationRequired(Rutas);
