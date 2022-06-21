import { Card, HomeContent } from "../styled-c/styled-components";

const Home = () => {
  return (
    <main className="mainContainer">
      <HomeContent>
        <Card href="/Ficha">
          <p>Crea ficha técnica</p>
        </Card>
        <Card href="/Recetas">
          <p>Indice de recetas</p>
        </Card>
        <Card href="/EscEvento">
          <p>Crea lista de producción para eventos</p>
        </Card>
        <Card href="/EscPartida">
          <p>Crea lista de producción para partida</p>
        </Card>
      </HomeContent>
    </main>
  );
};

export default Home;
