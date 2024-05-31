import arrow from "../../assets/arrow.gif";
import { useState } from "react";
import "../projet/collapse.css";


// Création de composant collapse qui prend 2 propriétés
export default function Collapse({ title, text, text1, text2, img ,icon,icon1,icon2,icon3}) {
  // Initialisation de isCollapsed avec use state à true
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Fonction qui inverse la valeur en utilisant le setter setIsCollapsed
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapseBase">
      <div className="collapse">
        {/* On surveille le click sur notre élément et ont déclenche la
                  fonction toggleCollapse */}
        <h3 className="collapse_title" onClick={toggleCollapse}>
          {/* Propriété passée au composant  */}
          {title}
          {/* On définie notre class en fonction de la valeur de  l'état */}
          <img
            className={`arrow ${isCollapsed ? "arrow_down" : "arrow_up"}`}
            src={arrow}
            alt="arrow description"
          />
        </h3>
        <div
          // On vérifie la valeur et on modifie la class en fonction
          className={`collapse_content${isCollapsed ? "_hidden" : ""}`}
        >
          <div className="collapse_text">

            <p> {text} </p>
            <p> {text1} </p>
            <p> {text2} </p>

            <div className="iconCard">
                  <img className="icon" src={icon} alt="GitHub" />
                  <img className="icon" src={icon1} alt="Figma" />
                  <img className="icon" src={icon2} alt="HTML" />
                  <img className="icon" src={icon3} alt="CSS" />
                </div>
          </div>

          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
