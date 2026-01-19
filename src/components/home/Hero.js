import Image from "next/image";
import Link from "next/link"
import { FaCalendarDays, FaArrowDown } from "react-icons/fa6"

export default function Hero() {
  return (
    <>
      <section className='mx-auto max-w-6xl px-4 py-12 pt-8 pb-12 sm:pt-12 sm:pb-24 flex flex-col items-center gap-6 text-center'>
        <div className='mb-4 inline-block'>
          <div className='relative flex items-center gap-3 rounded-full border border-[#1c1c1c]/20 bg-white px-4 py-3 overflow-hidden sm:gap-5 sm:px-8 sm:py-4 sm:overflow-visible md:px-10 md:py-5 shadow-[0_18px_48px_rgba(0,0,0,32),0_0_20px_rgba(113,221,174,0.4),0_0_40px_rgba(113,221,174,0.2)]'>
            <div>
              <Image src="/logo_bulle.png" alt="logo" width={56} height={56} />
            </div>
            <p className='text-sm font-bold text-[#1c1c1c] overflow-hidden whitespace-nowrap text-ellipsis sm:text-base md:text-lg sm:overflow-visible sm:whitespace-normal md:text-xl lg:text-2xl xl:text-3xl'>
              CRÉER UN SITE WEB <span className='underline decoration-[#1c1c1c]'>VRAIMENT</span> UNIQUE
            </p>
          </div>
        </div>

        <h1 className='max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl'>
          Votre 
          <span className='text-[#71ddae]'> site </span>
          doit 
          <span className='text-[#71ddae]'> donner envie </span>
          de 
          <span className='text-[#71ddae]'> rester</span>,
          pas de 
          <span className='line-through decoration-[#1c1c1c]'>
            <span className='text-[#71ddae]'> revenir</span> en
            <span className='text-[#71ddae]'> arrière</span>
          </span>. 
        </h1>

        <p className='me ax-w-lg text-base font-medium text-white/80 sm:max-w-2xl sm:text-lg md:text-xl'>
          Design moderne, SEO solide, Suivi complet : <br />
          on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </p>

        <div className='flex flex-col items-center gap-4 sm:flex-row sm:gap-4 mt-8'>
          <div className='relative w-full sm:w-auto text-[#1c1c1c]'>
            <Link href="#" className='inline-flex w-full items-center justify-center gap-3 rounded-lg bg-linear-to-r from-[#71ddae] to-[#2a9d7a] px-6 py-3 text-lg font-extrabold tracking-wide shadow-lg transtion-transform duration-200 hover:scale-105 active:scale-95 sm:px-8 sm:py-4 sm:text-lg'>
              <FaCalendarDays size={20} />
              Prendre RDV
            </Link>
            <div className='absolute top-full -left-12 -mt-4 pointer-events-none hidden sm:block'>
              <Image src="/un_ptit_click.png" alt="Un ptit clic" width={200} height={150} className='w-auto h-auto max-w-50' />
            </div>
          </div>
          <div className='text-[#71ddae]'>
            <Link href="#" className='inline-flex w-full items-center justify-center gap-3 rounded-lg border-2 border-[#71ddae] bg-transparent px-6 py-3 text-base font-extrabold tracking-wide transition-all duration-200 hover:bg-[#71ddae]/10 sm:w-auto sm:py-4 sm:text-lg'>
              Découvrir nos projets
              <FaArrowDown size={20 } />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}