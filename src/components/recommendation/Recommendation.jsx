import { useRef } from "react";
import { useInView } from "framer-motion";

import stars from "../../assets/recommendation/stars.png";
import "../recommendation/recommendation.css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sectionExperience" id="sectionExperience" ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(200px)translateY(400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Recommendation() {
  return (
    <>
      <Section>
        <div className="recommendationImg">
          <div className="recommendationImgDiv ">
            <div className="recommendationCard">
              <div className="recommendationCardHeader">
                <div className="headerRecommendation">
                  <p>Author</p>
                  <h5>Gilles F</h5>
                </div>
                <img className=" stars " src={stars} alt="" />
              </div>
              <h6>Ingénieur de développement NTIC chez Atos</h6>

              <p>
                {" "}
                
                J'ai accompagné Anthony en tant que <b>mentor</b>  durant presque un an.
                Il s'est montré curieux, sérieux, et rigoureux.Il n'a jamais b
                reculé devant les difficultés rencontrées et n'est pas du genre
                à abondonner. Il a toutes les qualités pour devenir un bon
                développeur. Je l'acceuillerais sans aucune réserve dans mon
                équipe projet si l'occasion se présentait.
              </p>
            </div>
            <div className="recommendationCard">
              <div className="recommendationCardHeader">
                <div className="headerRecommendation">
                  <p>Author</p>
                  <h5>Caroline B</h5>
                </div>
                <img className=" stars " src={stars} alt="" />
              </div>
              <h6>Responsable de région/ Commerce de détails</h6>

              <p>
                {" "}
                " Monsieur C Anthony a effectué dans notre magasin <b>INTIMISSIMI</b> 
                de Toulouse <b>(CALZEDONIA GROUPE)</b>  le poste de <b>responsable de
                magasin</b>  depuis le mois d'avril 2016 jusqu'au 31 août 2016. Il a
                fait preuve dès le début d'un réel <b>professionnalisme</b> , toujours
                disponible pour le magasin, les clients mais aussi son équipe de
                vente. Très à l'aise sur la gestion des stocks, et les analyse
                commerciales, Anthony à fait preuve de beaucoup de rigueur dans
                son travail au quotidien.De nature sociale et formateur, il a su
                former son équipe avec respect des règles et de la hierarchie"
              </p>
            </div>
            <div className="recommendationCard">
              <div className="recommendationCardHeader">
                <div className="headerRecommendation">
                  <p className="headerRecommendation p" >Author</p>
                  <h5>Antoine T </h5>
                </div>
                <img className=" stars " src={stars} alt="" />
              </div>
              <h6>Responsable de région/ Commerce de détails</h6>

              <p>
                " Monsieur Anthony C a fait partie de nos effectifs pendant 2
                ans. Ce dernier n'a cessé de nous donner satisfaction dans
                l'exercice de ses fonctions de responsable. En effet, notre
                maison propose à la clientèle un <b>haut de gamme</b>  nécessitant le
                conseil d'un personnel hautement qualifié. Monsieur C Anthony
                dispose de réelles compétences pour une mise en exergue
                optimisée du produit. Sa connaissance du textile, son respect du
                client, son sens aiguisé de l'observation et de <b> l'écoute des
                besoins</b> lui ont permis de fidéliser une clientèle et d'accroître
                régulierement le CA du point de vente qu'il gérait en toute
                autonomie. C'est donc sans hésitation aucune que nous pouvons
                recommander sa candidature à des postes équivalents ou de
                responsabilité supérieur prévoyant un encadrement d'équipe."
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
