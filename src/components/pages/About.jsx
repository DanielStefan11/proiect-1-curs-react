import React from "react";
import "../styling/About.css";
import ScrollToTopBtn from "../ScrollToTopBtn";
// React icons
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";

function About(props) {
  const { scrollBtnVizibility, handleScrollToTop } = props;

  return (
    <div className="about-page">
      <div className="about-heading-container">
        <h1>Despre acest proiect</h1>
      </div>

      <h3>Tehnologii utilizate</h3>
      <div className="tech-list">
        <div>
          <SiHtml5 size="4rem" color="#DD4B25" />
          <p>HTML5</p>
        </div>
        <div>
          <SiCss3 size="4rem" color="#254BDD" />
          <p>CSS3</p>
        </div>
        <div>
          <SiJavascript size="4rem" color="#EFD81D" />
          <p>Javascript</p>
        </div>
        <div>
          <SiReact size="4rem" color="#50BBD7" />
          <p>React.js</p>
        </div>
      </div>

      <div className="lists-container">
        <div>
          <h3>Particularități</h3>
          <ul>
            <li>preluare date (utilizatori/postări) prin API</li>
            <li>afișarea datelor în aplicație</li>
            <li>filtrarea datelor primite prin API</li>
            <li>legarea/comunicarea componentelor între ele prin props</li>
            <li>transmiterea funcțiilor ca props de la o componentă la alta</li>
            <li>stilizarea elementelor și componentelor afișate</li>
            <li>
              utilizarea state-ului pentru a afișarea componentelor în aplicație
            </li>
            <li>aplicarea React Router</li>
          </ul>
        </div>

        <div>
          <h3>Funcționalități</h3>
          <ul>
            <li>adaugă unul sau mai mulți utilizatori folosind formularul</li>
            <li>șterge unul sau mai mulți utilizatori</li>
            <li>arată sau ascunde lista de utilizatori</li>
            <li>arată sau ascunde lista de postări</li>
            <li>șterge una sau mai multe postări</li>
            <li>schimbă culoarea fundalului (fără antet și subsol)</li>
            <li>
              schimbă culoarea textului (fără antet și subsol și doar pe prima
              pagină)
            </li>
            <li>buton care derulează pagina înapoi la antet</li>
          </ul>
        </div>
      </div>
      <ScrollToTopBtn
        scrollBtnVizibility={scrollBtnVizibility}
        handleScrollToTop={() => handleScrollToTop()}
      />
    </div>
  );
}

export default About;
