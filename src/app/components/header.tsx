import Image from "next/image";

export function Header(){
    return(
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
    )
}