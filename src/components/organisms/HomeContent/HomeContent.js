import React from "react";
import { Link } from "react-router-dom";
import "./homeContent.styles.scss";

const HomeContent = () => {
  return (
    <main className="homeContent--container">
      <section>
        <h1>Corbie.</h1>
        <h2>Tenha mais controle sobre seus projetos.</h2>
        <p>
          Gerencie suas horas trabalhadas, visualize seus ganhos e compartilhe
          relatórios com seus clientes.
          <span> Chega de sofrer fazendo planilhas!</span>
        </p>
        <Link to="/signup">Comece a usar</Link>
      </section>
      <section />
    </main>
  );
};

export default HomeContent;
