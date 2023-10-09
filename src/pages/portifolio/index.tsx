import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
 subsets: ['latin'],
 weight: '700',
})

export default function Portifolio() {
 return (
  <div>
   <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-5 xl:w-fit gap-3 text-md">

    <li style={{ backgroundColor: "#61DBFB", color: 'black' }} className="w-120 p-1 text-xl rounded-lg">
     <h2 className={`${roboto.className} mb-12 font-bold text-center`}>
      Game Jokenpo - Flutter
     </h2>
     <Image src="https://i.imgur.com/HVXBAJV.jpg" alt="foto de perfil"
      unoptimized
      width={200}
      height={200}
      style={{ marginLeft: 140, marginTop: "-40px" }}
     />
     <h2 style={{ marginTop: 10 }} className={`${roboto.className} mb-12 font-bold text-center`}>
      <a target="_blank" href="https://github.com/Agotsilv/jokenpogame" className="text-sm md:text-lg text-black underline truncate">Repositorio</a>
     </h2>
    </li>

    <li style={{ backgroundColor: "#61DBFB", color: 'black' }} className="w-120  p-1 text-xl rounded-lg">
     <h2 className={`${roboto.className} mb-12 font-bold text-center`}>
      Clone do Youtube - Flutter
     </h2>
     <Image src="https://i.imgur.com/axj8WFp.jpg" alt="foto de perfil"
      unoptimized
      width={200}
      height={200}
      style={{ marginLeft: 130, marginTop: "-40px" }}
     />
     <h2 style={{ marginTop: 10 }} className={`${roboto.className} mb-12 font-bold text-center`}>
      <a target="_blank" href="https://github.com/Agotsilv/youtube_project_flutter" className="text-sm md:text-lg text-black underline truncate">Repositorio</a>
     </h2>
    </li>

    <li style={{ backgroundColor: "#61DBFB", color: 'black' }} className="w-120 h-15 p-1 text-xl rounded-lg">
     <h2 className={`${roboto.className} mb-12 font-bold text-center`}>
      WeatherApp - React Native
     </h2>

     <h2 style={{ marginTop: 10 }} className={`${roboto.className} mb-12 font-bold text-center`}>
      <a target="_blank" href="https://github.com/Agotsilv/weatherApp-ReactNative" className="text-sm md:text-lg text-black underline truncate">Repositorio</a>
     </h2>
    </li>

   </ul>
  </div>
 )
}