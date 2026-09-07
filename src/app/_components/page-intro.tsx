import Image from "next/image";

export function PageIntro({ eyebrow, title, text, image = "/images/foggy-view.jpeg" }: { eyebrow: string; title: React.ReactNode; text: string; image?: string }) {
  return <section className="page-intro"><Image src={image} alt="Kodaikanal landscape" fill priority sizes="100vw" /><div className="page-intro-shade" /><div className="page-width intro-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div></section>;
}
