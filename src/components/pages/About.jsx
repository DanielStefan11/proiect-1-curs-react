import React from "react";
import "../styling/About.css";

function About() {
  return (
    <div className="about-page">
      <div>
        <h1>Despre acest proiect</h1>
        <div className="about-underscore"></div>
      </div>

      <h3>Tehnologii utilizate</h3>
      <div className="tech-list">
        <div>
          <i className="fab fa-html5 fa-2x"></i>
          <p>HTML5</p>
        </div>
        <div>
          <i className="fab fa-css3-alt fa-2x"></i>
          <p>CSS3</p>
        </div>
        <div>
          <i className="fab fa-js-square fa-2x"></i>
          <p>Javascript</p>
        </div>
        <div>
          <i className="fab fa-react fa-2x"></i>
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
    </div>
  );
}

export default About;
