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

const ProdPartida = () => {
  const [target, setTarget] = useState(null);
  const [targetName, setTargetName] = useState(null);
  const [targetPartida, setTargetPartida] = useState(null);
  const [targetIngredients, setTargetIngredients] = useState(null);
  const [loading, setLoading] = useState(true);

  //Método que recoge los datos introducidos en el input y los pasa al
  //estado ficha
  const search = (e) => {
    switch (e.target.id) {
      case "nom":
        setTargetName(e.target.value.toLowerCase());
        break;
      case "partida":
        setTargetPartida(e.target.value.toLowerCase());
        break;
      case "ingrediente":
        setTargetIngredients(e.target.value.toLowerCase());
        break;

      default:
        break;
    }
  };

  const fetchRecipe = async () => {
    const data = await getRecipes();
    data.docs.map((e) => {
      if (e.data().nom.toLowerCase() === targetName.toLowerCase() 
        // ||
        // e.partida === targetPartida ||
        // targetIngredients
      ) { 

        
        localArray.push(e.data());
              console.log(e.data().nom.toLowerCase());

        console.log(localArray);
      }
    });
    setTarget(localArray);
    setLoading(false);
  };

  // useEffect(() => {
  //   console.log(target);
  // }, [target]);

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
          <Button onClick={fetchRecipe}>Busca</Button>
          <Label htmlFor="partida">Partida</Label>
          <InputField
            onChange={search}
            type="text"
            name="partida"
            id="partida"
            className="input"
          />
          <Button onClick={fetchRecipe}>Busca</Button>
          <Label htmlFor="ingrediente">Ingrediente</Label>
          <InputField
            onChange={search}
            type="text"
            name="ingrediente"
            id="ingrediente"
            className="input"
          />
          <Button onClick={fetchRecipe}>Busca</Button>
        </InputContainer>
      </DivList>

      {/* Bloque que muestra la/s busquedas*/}
      <OutputContainer>
        {/* <div>
          {!loading && recetas.map((e) => (
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
        </div> */}
        {loading && <CardDiv>Cargando...</CardDiv>}
      </OutputContainer>
    </main>
  );
};

export default ProdPartida;
