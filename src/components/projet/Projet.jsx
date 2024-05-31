
import Collapse from "../projet/Collapse";
import elementProjet from "../projet/elementProjet";
import "../projet/projet.css";

export default function Projet() {
  return (
    <div className="accomodation">
      {elementProjet.map((data) => (
        <div className="accomodation_collapse_about" key={data.id}>
          <Collapse title={data.projetName} text={data.text1}  text1={data.text2} text2={data.text3} icon={data.icon} icon1={data.icon1} icon2={data.icon2} icon3={data.icon3}    img={data.photo}/>
        </div>
      ))}
    </div>
  );
}