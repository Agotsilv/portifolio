import Head from "next/head";
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'

export default function Contatos(){
 return(
  <>
  <Head>
   <title>Contatos</title>
  </Head>
  <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
   <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
   <ul className="table mx-auto space-y-6 md:space-y-8">
    <li className="md:text-xl">
     <span className="flex items-center font-bold">E-mail 
     <HiOutlineMail className="ml-2 text-xl"/>
     </span>
     <div className="flex gap-1 md:gap-3 items-center">
      <a target="_blank" href="mailto:tiagotrance15@gmail.com" className="text-sm md:text-lg text-slate-300 underline truncate">tiagotrance15@gmail.com</a>
     </div>
    </li>
    <li className="md:text-xl">
     <span className="flex items-center font-bold">LinkedIn 
     <BsLinkedin className="ml-2 text-xl"/>
     </span>
     <div className="flex gap-1 md:gap-3 items-center">
      <a target="_blank" href="https://www.linkedin.com/in/agotsilva/" className="text-sm md:text-lg text-slate-300 underline truncate">linkedin.com/in/agotsilva/</a>
     </div>
    </li>
    <li className="md:text-xl">
     <span className="flex items-center font-bold">GitHub
      <AiFillGithub className="ml-2 text-xl"/>
     </span>
     <div className="flex gap-1 md:gap-3 items-center">
      <a target="_blank" href="https://github.com/Agotsilv" className="text-sm md:text-lg text-slate-300 underline truncate">github.com/Agotsilv</a>
     </div>
    </li>
    <li className="md:text-xl">
     <span className="flex items-center font-bold">
      WhatsApp
      <AiOutlineWhatsApp className="ml-2 text-xl"/>
      </span>
     <div className="flex gap-1 md:gap-3 items-center">
      <a target="_blank" href="mailto:tiagotrance15@gmail.com" className="text-sm md:text-lg text-slate-300 underline truncate">(61) 99615-4803</a>
     </div>
    </li>
   </ul>
  </div>
  </>
 )
}