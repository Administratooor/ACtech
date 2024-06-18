import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import "../Main/main.css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-text" ref={ref}>
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
  const fullText = "  Bienvenue ! Je suis Anthony C";

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
    <div className="page-container" id="main">
      <div className="left-panel">
        <Section>
          <p>ANTHONY C. | DÉVELOPPEUR WEB</p>
          <button>
            <a href="http://">Mon Github</a>
          </button>
        </Section>
      </div>
      <div className="right-panel">
        <div className="right-content">
          <h1>{displayedText}</h1>
          <p>Let's explore</p>
          <nav className="nav-links">
            <a href="#main">Home</a>
            <a href="#realisation">Réalisations</a>
            <a href="#sectionExperience">Vie Pro</a>
            <a href="#formulaire">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
