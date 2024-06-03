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
          <p className="accomodationPChildren">
            Un cours résumé des différents projets que j'ai pu réaliser. En tant
            que
            <b> développeur Fullstack</b> , j'ai réalisé une variété de projets
            qui démontrent mes compétences en <b>JavaScript</b> , tant pour le{" "}
            <b>frontend </b> que pour le <b>backend</b> . J'ai conçu et
            développé des{" "}
            <b>
              interfaces web dynamiques et des applications web progressives
              (PWA)
            </b>{" "}
            qui offrent une expérience utilisateur <b>fluide et interactive.</b>{" "}
            En parallèle, j'ai mis en place des backends{" "}
            <b>robustes et performants</b> , garantissant la{" "}
            <b>fiabilité et l'efficacité des systèmes</b> . Mon expertise en
            JavaScript me permet de créer des solutions complètes, de la
            conception d'interfaces utilisateur attrayantes à la gestion de la
            logique serveur.
          </p>
          {/* <img className="xpImg" src={sale} alt="" srcset="" /> */}
        </div>
        <div className="experienceMainDescription">
          <Section>
            <ul>
              <li>
                <p>
                  Avec 5 ans d'expérience professionnelle et{" "}
                  <b>26 ans de passion </b> , le support technique n'a plus de
                  secret pour moi. Ces dernières années, j'ai acquis de solides
                  compétences en
                  <b>
                    {" "}
                    développement de sites web et de web applications.
                  </b>{" "}
                  J'ai également participé à des <b>projets fullstack</b> en
                  entreprise pour le développement interne.{" "}
                </p>
              </li>
              <li>
                <p>
                  <b>La gestion </b>complète de boutique de vêtement m'a fait
                  aquérir des compétence clefs ! Notemment la
                  <b> gestion des équipes, des produits</b> mais surtout la
                  <b> clientèle et fidélisation.</b> Plusieurs{" "}
                  <b>grandes enseignes</b> m'ont fait confiance !
                </p>
              </li>

              <li>
                <p>
                  {" "}
                  Engagée volontaire de l'armée de terre durant 5 ans au{" "}
                  <b>3èmes régiment du génie</b>
                  <b>Sapeur de combat du génie</b> mais également en{" "}
                  <b> appui</b> des sections de combat.
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
