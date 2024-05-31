import booki from "../../assets/gif/booki.png";
import ohmyfood from "../../assets/gif/ohmyfood.gif";
import kanap from "../../assets/gif/kanap.gif";
import piquante from "../../assets/gif/piquante.gif";
import panthere from "../../assets/gif/panthere.gif";
import htmlIcon from "../../assets/assetsContact/html.png";
import cssIcon from "../../assets/assetsContact/css.png";
import javascriptIcon from "../../assets/assetsContact/javascript.png";
import scssIcon from "../../assets/assetsContact/scss.png";
import kanapIcon from "../../assets/assetsContact/kanap.png";
import framework from "../../assets/assetsContact/framework.png";
import bdd from "../../assets/assetsContact/bdd.png";
import api from "../../assets/assetsContact/api.png";
import node from "../../assets/assetsContact/nodejs.png";
import figmaIcon from "../../assets/assetsContact/figma.png";
import seo from "../../assets/assetsContact/seo.png";
import accessibilite from "../../assets/assetsContact/accessibilite.png";
import githubIcon from "../../assets/assetsContact/github.png";
const elementProjet = [
  {
    id: "1",
    projetName: "Booki",
    text1: " Intégrer du contenu conformément à une maquette.",
    text2: " Implémenter une interface responsive",
    text3: " Découpage maquette",
    icon:githubIcon,
    icon1:htmlIcon,
    icon2:cssIcon,
    icon3:figmaIcon,
    photo: booki,
  },
  {
    id: "2",
    projetName: "OhMyFood",
    text1: "Mettre en œuvre des effets CSS graphiques avancés",
    text2: " Assurer la cohérence graphique d'un site web",
    text3: " Assurer la cohérence graphique d'un site web    ",
    icon:githubIcon,
    icon2:cssIcon,
    icon3:scssIcon,
    photo: ohmyfood,
  },
  {
    id: "3",
    projetName: "La Panthère",
    text1: "Analyse< de l’état actuel de SEO du site fourni",
    text2: "Amélioration du SEO du site",
    text3: "Comparaison des résultats",
    icon:githubIcon,
    icon1:seo,
    icon2:accessibilite,
    photo: panthere,
  },
  {
    id: "4",
    projetName: "Kanap",
    text1: "E-Commerce   ",
    text2: "Web service avec JavaScript",
    text3: "Validation des données",
    icon:githubIcon,
    icon1:javascriptIcon,
    icon2:kanapIcon,
    icon3:htmlIcon,
    photo: kanap,
  },
  {
    id: "5",
    projetName: "Piiquante",
    text1: "Opérations CRUD de manière sécurisée",
    text2: "Stocker des données de <b>manière sécurisée",
    text3:
      "Implémenter un<b> modèle logique de données conformément à la réglementation",
      icon:githubIcon,
      icon1:bdd,
      icon2:node,
      icon3:api,
      photo: piquante,

  },
  {
    id: "6",
    projetName: "Kasa",
    text1: "React Router",
    text2: "Composants React",
    text3:
      "Initialiser une application",
      icon:githubIcon,
      icon1:javascriptIcon,
      icon2:framework,
    photo: piquante,
  },
];

export default elementProjet;
