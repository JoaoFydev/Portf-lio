import { Header } from "./components/header/header";

import "./styles/home.scss"

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="experience">
        <h3>Experiencie</h3>
        <p>Texto</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>EN - Fluent</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info"></div>
          <span></span>
          <span>Analise e Desenvolvimento de Sistemas - UNIFRAN</span>
        </div>
        <div className="buttons"></div>
        <div className="social">
          
        </div>
        <button>contact me</button>
      </div>
    </main>
  );
}
