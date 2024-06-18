import { useRef } from "react";
import { useInView } from "framer-motion";
import "../experience/experience.css";
import sale from "../../assets/xpAc.gif";
import Recommendation from "../recommendation/Recommendation";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sectionExperience" id="sectionExperience" ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Experience() {
  return (
    <>
      <Section>
        <div className="experienceMain">
          <p className="accomodationP">EXPERIENCE</p>
          <p className=" acommodationExpérience">
         
          </p>
        </div>
        <div className="experienceMainDescription">
          <Section>
            <ul>
              <li>
                <p>
                Votre profil est <b>  atypique.</b> Voici ce que disent les personnes que je
            rencontre !  Dans un premier temps <b>militaire</b>  durant 5ans, j'ai ensuite obtenu un
            BAC TB2A en architecture à ma sortie , où j'ai également acquis des compétences
            en <b>DAO</b> .
                </p>
              </li>
              <li>
                <p>
                Par la suite, j'ai pu piloter plusieurs boutique de vétements pour de grande marque, Originaire de la banlieue lilloise, mon parcours en a
            surpris plus d'un ! Mon chemin n'a pas toujours été bien défini dès
            le départ, car j'aime voyager, découvrir, apprendre et sortir de ma
            zone de confort chaque jour.
                </p>
              </li>

              <li>
                <p>
                Aujourd'hui, je possède un titre de
            <b> développeur fullstack JS </b>et j'ai également de l'expérience en tant
            que <b>technicien système et réseaux.</b>  Travailler dans la Tech a
            toujours été un  objectif pour moi, car c'est un environnement que je
            connais bien. Depuis l'âge de 8 ans, avec mon premier ordinateur en
            main, je bidouillais déjà mes disquettes par curiosité. Cette
            <b>passion</b> ne m'a jamais quitté et m'a permis de toucher à de nombreux
            domaines en <b>informatique.</b> Je suis déterminé à continuer d'explorer
            et de m'épanouir dans ce domaine, en apportant ma <b>créativité, mon
            leadership et mon enthousiasme</b>  pour relever de nouveaux défis.
                </p>
              </li>
            </ul>
          </Section>
        </div>
      </Section>
      <Recommendation></Recommendation>
    </>
  );
}
