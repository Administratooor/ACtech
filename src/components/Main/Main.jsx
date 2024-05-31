import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import "../Main/main.css";
import github from "../../assets/assetsContact/github.png";
import linkedin from "../../assets/assetsContact/linkedin.png";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="leftText" ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translate(200px, -400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Main() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Bbienvenu !  Je suis Anthony C";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => {
          const nextChar = fullText[currentIndex];
          if (nextChar !== undefined) {
            return prev + nextChar;
          }
          return prev;
        });
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Ajuste la vitesse d'apparition en changeant la valeur (en ms)

    return () => {
      clearInterval(intervalId);
    };
  }, [fullText]);

  return (
    <div className="Page" id="main">
      <div className="left">
        <Section>
          <p>ANTHONY C. | DEVELOPPEUR WEB</p>
          <button>
            {" "}
            <a href="http://">Mon Github</a>
          </button>
        </Section>
      </div>
      <div className="right">
        <div className="rightText">
          <h1>{displayedText}</h1>
          <p>Passionné par le web et les technologies !</p>
          <div className="rightLink">
            <a href="#main">Profil</a>
            <a href="#projet">Collaboration</a>
            <a href="#sectionExperience">Chemin</a>
            <a href="#formulaire"> Où me joindre ? </a>
          </div>
  
        </div>
      </div>
    </div>
  );
}
