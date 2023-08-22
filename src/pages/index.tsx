import { Inter } from 'next/font/google'
import Head from 'next/head'
import { AboutMe } from '@/components/Home/AboutMe'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre Mim | Tiago Oliveira</title>
        <meta name='description' content='Desenvolvedor Font-end'/>
      </Head>
      <div className='py-12 px-6 md:pdx-32 space-y-10 md:space-y-28'>
        <AboutMe/>
      </div>
    </>
  )
}
 