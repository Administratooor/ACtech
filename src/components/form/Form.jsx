import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../form/form.css";
import peopleIcon from "../../assets/assetsContact/people.png"
import emailIcon from "../../assets/assetsContact/send.png"
import sendIcon from "../../assets/assetsContact/name.png"


export default function Form() {
  const form = useRef();
  const [formClick, setFormClick] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setFormClick("clicked");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          // Retirer la classe après le succès
          setFormClick("");
          alert("Cool, ce mail sera lu très prochainement ! Bonne visite...");
        },
        (error) => {
          // Retirer la classe après une erreur
          setFormClick("");
          alert(
            "Désolé, nous rencontrons actuellement des problèmes, vous pouvez bien évidement me contacter à l'adresse suivante : clementanthony@hotmail.fr",
            error.text
          );
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p className="send">SEND US MESSAGE</p>
      <div className="form">
        <div className="FormChoice">
          <div className="formSelect">
            <p className="FormP">Pourriez-vous m'en dire plus ?</p>
            <select name="user_choice" id="choice" className="choice">
              
              <option className="customOption" value="Visiteur">Visiteur</option>
              <option className="customOption" value="Recruteur">Recruteur</option>
              <option className="customOption" value="Autre">Autre</option>
            </select>
           
          </div>
        </div>
        <div className="formPosition">
          <label htmlFor="user_name">
            <img className="iconForm" src={peopleIcon} alt="People Icon" />
          </label>
          <input type="text" name="user_name" id="user_name" placeholder="Name" />
        </div>

        <div className="formPosition">
          <label htmlFor="user_email">
            <img className="iconForm" src={emailIcon} alt="Email Icon" />
          </label>
          <input type="email" name="user_email" id="user_email" placeholder="Email" />
        </div>
        <div className="formPosition">
          <label htmlFor="message">
          </label>
          <textarea name="message" id="message" placeholder="Message" />
        </div>      <input className={`sub ${formClick}`} type="submit" value="Send" />
      </div>


    </form>
  );
}