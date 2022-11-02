import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../../applications/api";
import {
  InputContainer,
  OutputContainer,
  InputField,
  CardDiv,
  OutputList,
  DivList,
  Label,
  Button,
} from "../styled-c/styled-components";

const localArray = [];

const ProdEvento = () => {
  const [target, setTarget] = useState(null);

  //Método que recoge los datos introducidos en el input y los pasa al
  //estado ficha
  const search = (e) => {
    switch (e.target.id) {
      case "nom":
        setTarget((prevState) => ({ ...prevState, nom: e.target.value }));
        break;
      case "partida":
        setTarget((prevState) => ({ ...prevState, partida: e.target.value }));
        break;
      case "ingrediente":
        setTarget((prevState) => ({ ...prevState, fecha: e.target.value }));
        break;

      default:
        break;
    }
  };

  const [recetas, setRecetas] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipe = async () => {
    const data = await getRecipes();
    data.docs.map((e) => localArray.push(e.data()));
    setRecetas(localArray);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  useEffect(() => {}, [recetas]);

  return (
    <main className="mainContainer" id="fichaMain">
      {/* Bloque de inputs de busqueda */}
      <DivList>
        <InputContainer>
          <Label htmlFor="nom">Nombre plato</Label>
          <InputField
            onChange={search}
            type="text"
            name="nom"
            id="nom"
            className="input"
          />
          <Button>Busca</Button>
          <Label htmlFor="partida">Partida</Label>
          <InputField
            onChange={search}
            type="text"
            name="partida"
            id="partida"
            className="input"
          />
          <Button>Busca</Button>
          <Label htmlFor="ingrediente">Ingrediente</Label>
          <InputField
            onChange={search}
            type="text"
            name="ingrediente"
            id="ingrediente"
            className="input"
          />
          <Button>Busca</Button>
        </InputContainer>
      </DivList>

      {/* Bloque que muestra la/s busquedas*/}
      <OutputContainer>
        <div>
          {!loading &&
            recetas.map((e) => (
              <Link to="/RecetasOutput" state={e} key={e.nom + e.fecha}>
                <OutputList>
                  -Nombre de plato: {e.nom}
                  <br />
                  -Partida: {e.partida}
                  <br />
                  -Fecha: {e.fecha}
                </OutputList>
              </Link>
            ))}
        </div>
        {loading && <CardDiv>Cargando...</CardDiv>}
      </OutputContainer>
    </main>
  );
};

export default ProdEvento;
