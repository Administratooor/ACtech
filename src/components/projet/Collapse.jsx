import arrow from "../../assets/arrow.png";
import { useState } from "react";
import "../projet/collapse.css";

export default function Collapse({
  title,
  text,
  text1,
  text2,
  img,
  icon,
  icon1,
  icon2,
  icon3,
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse} aria-expanded={!isCollapsed}>
        <h3 className="collapse-title">{title}</h3>
        <img
          className={`collapse-arrow ${isCollapsed ? "collapse-arrow-up" : "collapse-arrow-down"}`}
          src={arrow}
          alt="Toggle collapse"
        />
      </div>
      <div className={`collapse-content ${isCollapsed ? "collapse-content-hidden" : ""}`}>
        <div className="collapse-text">
          <p>{text}</p>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
        <div className="collapse-icons">
          <img className="collapse-icon" src={icon} alt="GitHub" />
          <img className="collapse-icon" src={icon1} alt="Figma" />
          <img className="collapse-icon" src={icon2} alt="HTML" />
          <img className="collapse-icon" src={icon3} alt="CSS" />
        </div>
        <img className="collapse-image" src={img} alt={`${title} project`} />
      </div>
    </div>
  );
}
