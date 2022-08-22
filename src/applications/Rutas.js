import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Ficha from "../components/Ficha/Ficha";
import Recetas from "../components/Recetas/Recetas";
import RecetasOutput from "../components/Recetas/RecetasOutput";
import Produccion from "../components/Produccion/Produccion";
import ProdEvento from "../components/Produccion/ProdEvento";
import ProdPartida from "../components/Produccion/ProdPartida";
import Admin from "../components/Admin/Admin";
import AdminLogin from "../components/Admin/AdminLogin";
import AdminRegister from "../components/Admin/AdminRegister";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Page404 from "../components/Page404/Page404";
import ProtectedRoute from "../components/ProtectedRoute";

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route exact path="/Ficha" element={<ProtectedRoute><Ficha /></ProtectedRoute>} />
        <Route exact path="/Recetas" element={<ProtectedRoute><Recetas /></ProtectedRoute>} />
        <Route exact path="/RecetasOutput" element={<ProtectedRoute><RecetasOutput /></ProtectedRoute>} />
        <Route exact path="/Produccion" element={<ProtectedRoute><Produccion /></ProtectedRoute>} />
        <Route exact path="/ProdEvento" element={<ProtectedRoute><ProdEvento /></ProtectedRoute>} />
        <Route exact path="/ProdPartida" element={<ProtectedRoute><ProdPartida /></ProtectedRoute>} />
        <Route exact path="/Admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route exact path="/AdminLogin" element={<ProtectedRoute><AdminLogin /></ProtectedRoute>} />
        <Route exact path="/AdminRegister" element={<ProtectedRoute><AdminRegister /></ProtectedRoute>} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Registre" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
