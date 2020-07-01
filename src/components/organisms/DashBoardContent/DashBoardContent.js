/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import Moment from "react-moment";
import "./dashBoardContent.styles.scss";

const DashBoardContent = ({ projects, userInfos, onClick, ...props }) => {
  return (
    <main className="dashBoardContent--container">
      <h1>Seus Projetos</h1>
      <section>
        <input type="text" placeholder="Procurar Projeto" />
        <button type="button">NOVO PROJETO</button>
      </section>
      <section>
        {projects.map((project, index) => {
          return (
            <div
              key={`${index + 1}--project${project._id}`}
              data={project._id}
              onClick={onClick}
              style={{ zIndex: "10" }}
            >
              <h2 data={project._id}>{project.title}</h2>
              <h2 data={project._id}>{project.status}</h2>
              <h2 data={project._id}>{project.hourPrice}</h2>
              <h2 data={project._id}>{project.duration}</h2>
              <h2 data={project._id}>Horas Trabalhadas</h2>
              <Moment format="DD/MM/YYYY" data={project._id}>
                <h2>{project.dueDate}</h2>
              </Moment>
              <Moment format="DD/MM/YYYY" data={project._id}>
                <h2>{project.creationDate}</h2>
              </Moment>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default DashBoardContent;
