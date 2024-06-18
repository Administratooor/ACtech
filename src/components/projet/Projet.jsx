import Collapse from "../projet/Collapse";
import elementProjet from "../projet/elementProjet";
import "../projet/projet.css";

export default function Projet() {
  return (
    <main className="project-main">
      <h1 id="realisations" className="project-title">
        PROJETS ET RÉALISATIONS
      </h1>
      <p className="project-description">
        Un court résumé des différents projets que j'ai pu réaliser. En tant que
        <strong> développeur Fullstack</strong>, j'ai réalisé une variété de projets qui
        démontrent mes compétences en <strong>JavaScript</strong>, tant pour le <strong>frontend</strong> que pour
        le <strong>backend</strong>. J'ai conçu et développé des <strong>interfaces web dynamiques et des
        applications web progressives (PWA)</strong> qui offrent une expérience
        utilisateur <strong>fluide et interactive.</strong> En parallèle, j'ai mis en place des
        backends <strong>robustes et performants</strong>, garantissant la <strong>fiabilité et
        l'efficacité des systèmes</strong>. Mon expertise en JavaScript me permet de
        créer des solutions complètes, de la conception d'interfaces utilisateur
        attrayantes à la gestion de la logique serveur.
      </p>
      <div className="project-list">
        {elementProjet.map((data) => (
          <div className="project-item" key={data.id}>
            <Collapse
              title={data.projetName}
              text={data.text1}
              text1={data.text2}
              text2={data.text3}
              icon={data.icon}
              icon1={data.icon1}
              icon2={data.icon2}
              icon3={data.icon3}
              img={data.photo}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
