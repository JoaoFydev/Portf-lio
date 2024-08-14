import Image from "next/image";
import "./header.scss";

export function Header(){
    return(
        <div className="header">
            <div>
              <h1>Hi, i´m João Victor!</h1>
              <h2>Web developer</h2>
            </div>
            <Image
                  src="/eu.png"
                  alt="Vercel Logo"
                  width={325}
                  height={340}
                  priority
                />
      </div>
    )
}