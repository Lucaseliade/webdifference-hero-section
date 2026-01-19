import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image src="/logo_bulle.png" alt="logo" width={56} height={56} />
      CRÉER UN SITE WEB VRAIMENT UNIQUE
      Votre site doit donner envie de rester, pas de revenir en  arrière 
      Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos visiteurs et vous apporte des résultats.
      Prendre RDV
      <Image src="/un_pti_click.png" alt="Un pti clic" width={56} height={56} />
      Découvrir nos projets
    </>
  );
}