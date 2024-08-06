import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
         <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
            <div>
              <h1>Hi, i´m João Victor!</h1>
              <h2>Web developer</h2>
            </div>
      </div>
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
        </div>
      </div>
    </main>
  );
}
