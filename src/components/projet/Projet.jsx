import Collapse from "../projet/Collapse";
import elementProjet from "../projet/elementProjet";
import "../projet/projet.css";

export default function Projet() {
  return (
    <>
      <p id="realisations" className="accomodationP">
        {" "}
        Projets et Réalisations
      </p>
      <p className="accomodationPChildren">
        Un cours résumé des différents projets que j'ai pu réaliser. En tant que
        <b> développeur Fullstack</b> , j'ai réalisé une variété de projets qui
        démontrent mes compétences en <b>JavaScript</b> , tant pour le <b>frontend </b> que pour
        le <b>backend</b> . J'ai conçu et développé des <b>interfaces web dynamiques et des
        applications web progressives (PWA)</b>  qui offrent une expérience
        utilisateur <b>fluide et interactive.</b>  En parallèle, j'ai mis en place des
        backends <b>robustes et performants</b> , garantissant la <b>fiabilité et
        l'efficacité des systèmes</b> . Mon expertise en JavaScript me permet de
        créer des solutions complètes, de la conception d'interfaces utilisateur
        attrayantes à la gestion de la logique serveur.
      </p>
      <div className="accomodation">
        {elementProjet.map((data) => (
          <div className="accomodation_collapse_about" key={data.id}>
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
    </>
  );
}
