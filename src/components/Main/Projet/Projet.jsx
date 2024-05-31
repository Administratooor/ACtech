import { useRef } from "react";
import { useInView } from "framer-motion";
import "../Projet/projet.css";
import htmlIcon from "../../../assets/assetsContact/html.png";
import cssIcon from "../../../assets/assetsContact/css.png";
import javascriptIcon from "../../../assets/assetsContact/javascript.png";
import scssIcon from "../../../assets/assetsContact/scss.png";
import kanapIcon from "../../../assets/assetsContact/kanap.png";
import framework from "../../../assets/assetsContact/framework.png";
import bdd from "../../../assets/assetsContact/bdd.png";
import api from "../../../assets/assetsContact/api.png";
import node from "../../../assets/assetsContact/nodejs.png";
import figmaIcon from "../../../assets/assetsContact/figma.png";
import seo from "../../../assets/assetsContact/seo.png";
import accessibilite from "../../../assets/assetsContact/accessibilite.png";
import bookiImg from "../../../assets/OCR video/booki.png";
import ohmyfoodImg from "../../../assets/OCR video/ohmyfood.gif";
import lapanthereImg from "../../../assets/OCR video/panthere.gif";
import kanapImg from "../../../assets/OCR video/kanap.gif";
import piquanteImg from "../../../assets/OCR video/piquante.gif";
import kasaImg from "../../../assets/OCR video/kasa.gif";
import githubIcon from "../../../assets/assetsContact/github.png";
import arrowImg from "../../../assets/arrow.gif";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        className="projetRightCard1"
        style={{
          transform: isInView ? "none" : "translate(200px, -400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Projet() {
  return (
    <div className="projet" id="projet">
      <div className="projetRight">
        <p>
          {" "}
          <img src={arrowImg} className="arrow" alt="Arrow" />
          REALISATION
        </p>
        <Section>
          <article className="projetRightCard">
            <div className="projetRightCardText">
              <h3>Booki</h3>
              <div className="projetRightCardImgIcon">
                <img src={bookiImg} className="projetImg" alt="Booki project" />
                <div className="iconCard">
                  <img className="github" src={githubIcon} alt="GitHub" />
                  <img className="github" src={figmaIcon} alt="Figma" />
                  <img className="github" src={htmlIcon} alt="HTML" />
                  <img className="github" src={cssIcon} alt="CSS" />
                </div>
              </div>
              <p>
                <b>Intégrer</b> du contenu conformément à une maquette
              </p>
              <p>
                <b>Implémenter</b> une interface responsive
              </p>
            </div>
          </article>
        </Section>
        <Section>
          <article className="projetRightCard">
            <div className="projetRightCardText">
              <h3>OhMyFood</h3>
              <div className="projetRightCardImgIcon">
                {" "}
                <img
                  className="projetImg"
                  src={ohmyfoodImg}
                  alt="OhMyFood project"
                />{" "}
                <div className="iconCard">
                  <img className="github" src={cssIcon} alt="CSS" />
                  <img className="github" src={scssIcon} alt="SCSS" />
                  <img className="github" src={githubIcon} alt="GitHub" />
                </div>
              </div>

              <p>
                <b>Mettre en œuvre</b> des effets CSS graphiques avancés
              </p>
              <p>
                <b>Assurer</b> la cohérence graphique d'un site web
              </p>
              <p>
                <b>Système de gestion</b> de versions pour le suivi du projet et
                son hébergement
              </p>
            </div>
          </article>
        </Section>

        <Section>
          <article className="projetRightCard">
            <div className="projetRightCardText">
              <h3>La Panthère</h3>
              <div className="projetRightCardImgIcon">
                <img
                  className="projetImg"
                  src={lapanthereImg}
                  alt="La Panthère project"
                />
                <div className="iconCard">
                  <img className="github" src={githubIcon} alt="github" />
                  <img className="github" src={seo} alt="seo" />
                  <img
                    className="github"
                    src={accessibilite}
                    alt="accessibilite"
                  />
                </div>
              </div>

              <p>
                <b>Analyse</b> de l’état actuel de SEO du site fourni
              </p>
              <p>
                <b>Amélioration</b> du SEO du site
              </p>
              <p>
                <b>Comparaison</b> des résultats
              </p>
            </div>
          </article>
        </Section>
        {/* <img src={arrowImg} className="arrow" alt="Arrow" />
        <h2>CARRIED</h2> */}

        <Section>
          <article className="projetRightCard">
            <div className="projetRightCardText">
              <h3>Kanap</h3>
              <div className="projetRightCardImgIcon">
                <img className="projetImg" src={kanapImg} alt="Kanap project" />
                <div className="iconCard">
                  <img
                    className="github"
                    src={githubIcon}
                    alt="JavaScript"
                  />
                  <img className="github" src={javascriptIcon} alt="javascriptIcon" />
                  <img className="github" src={kanapIcon} alt="Kanap Icon" />
                  <img className="github" src={htmlIcon} alt="HTML" />
                  <img className="github" src={cssIcon} alt="CSS" />
                </div>
              </div>
              <p>
                <b>E-Commerce</b>
              </p>
              <p>
                <b>web service </b> avec JavaScript
              </p>
              <p>
                <b>Valider</b> des données
              </p>
            </div>
          </article>
        </Section>

        <Section>
          <article className="projetRightCard">
            <div className="projetRightCardText">
              <h3>Piquante</h3>
              <div className="projetRightCardImgIcon">
                <img
                  className="projetImg"
                  src={piquanteImg}
                  alt="Piquante project"
                />{" "}
                <div className="iconCard">
                  <img className="github" src={githubIcon} alt="GitHub" />
                  <img className="github" src={bdd} alt="base de donnés" />
                  <img className="github" src={node} alt="nodeJS" />
                  <img className="github" src={api} alt="api" />
                </div>
              </div>

              <p>
                Opérations <b>CRUD </b> de manière sécurisée
              </p>
              <p>
                Stocker des données de <b>manière sécurisée</b>
              </p>
              <p>
                Implémenter un<b> modèle logique de données</b> conformément à
                la réglementation
              </p>
            </div>
          </article>
        </Section>
        {/* <img src={arrowImg} className="arrow" alt="Arrow" />
        <h2>OUT</h2> */}
        <Section>
          <article className="projetRightCard">
            <div className="projetRightCardText">
              <h3>Kasa</h3>

              <div className="projetRightCardImgIcon">
              <img className="projetImg" src={kasaImg} alt="Piquante project" />
              <div className="iconCard">
                <img className="icon" src={icon} alt="icon" />
                <img className="icon" src={icon1} alt="icon" />
                <img className="icon" src={icon2} alt="icon" />
                <img className="icon" src={icon3} alt="icon" />
              </div>

              </div>
              <p>
                <b>React Router </b>
              </p>
              <p>
                <b>Composants</b>
              </p>
              <p>
                Initialiser une <b>application </b>
              </p>

            </div>
          </article>
        </Section>
      </div>
    </div>
  );
}
