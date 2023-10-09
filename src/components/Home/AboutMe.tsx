import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiNestjs, SiExpo } from 'react-icons/si'
import { BiLogoNodejs, BiLogoPostgresql, BiLogoDocker, BiLogoTailwindCss, BiLogoJava, BiLogoFlutter } from 'react-icons/bi'


const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export function AboutMe() {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left text-center xl:flex-nowrap xl:justify-between">
      <div className="text-white flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">Prazer, sou&nbsp;
          <strong className="font-bold ">Tiago Oliveira</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>
            Mobile Developer
          </h2>
          <Link href='/contatos' className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Contato</Link>
          <Link target="_blank" href='https://drive.google.com/file/d/14udIHPMnilnRGSkoOCvWrjaTXdY8bR1p/view' download className="p-3 bg-t-blueCV w-fit text-xl rounded-lg transition-all hover:bg-opacity-80 ml-3">Curriculum</Link>
        </div>

        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-5 xl:w-fit gap-3 text-md">
          <li style={{ backgroundColor: "#61DBFB", color: 'black' }} className="w-fit p-3 text-xl rounded-lg"><FaReact className="text-2xl" /></li>
          <li style={{ backgroundColor: "#0d4468", color: 'white' }} className="w-fit p-3 text-xl rounded-lg"><SiTypescript className="text-2xl" /></li>
          <li style={{ backgroundColor: "#e12b55", color: 'white' }} className="w-fit p-3 text-xl rounded-lg"><SiNestjs className="text-2xl" /></li>
          <li style={{ backgroundColor: "#94c644", color: 'white' }} className="w-fit p-3 text-xl rounded-lg"><BiLogoNodejs className="text-2xl" /></li>
          <li style={{ backgroundColor: "#396495", color: 'white' }} className="w-fit p-3 text-xl rounded-lg"><BiLogoPostgresql className="text-2xl" /></li>
          <li style={{ backgroundColor: "#000000", color: 'white' }} className="w-fit p-3 text-xl rounded-lg"><SiExpo className="text-2xl" /></li>
          <li style={{ backgroundColor: "#ffffff", color: 'black' }} className="w-fit p-3 text-xl rounded-lg"><BiLogoDocker className="text-2xl" /></li>
          <li style={{ backgroundColor: "#ffffff", color: '#3fbff9' }} className="w-fit p-3 text-xl rounded-lg"><BiLogoTailwindCss className="text-2xl" /></li>
          <li style={{ backgroundColor: "#ffffff", color: 'black' }} className="w-fit p-3 text-xl rounded-lg"><BiLogoJava className="text-2xl" /></li>
          <li style={{ backgroundColor: "#000000", }} className="w-fit p-3 text-xl rounded-lg"><BiLogoFlutter className="text-2xl" /></li>
        </ul>
      </div>
      <div className="relative">
        <Image src="https://avatars.githubusercontent.com/u/94474189?v=4" alt="foto de perfil"
          unoptimized
          width={500}
          height={500}
          className="rounded-full"
        />
        <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
          <strong className="text-4xl">1+</strong>
          <br />
          Anos de experiência
        </p>
      </div>
    </main>
  )
}