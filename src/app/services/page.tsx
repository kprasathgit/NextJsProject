import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { serviceCards } from "../_data/site";
import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = { title: "Travel Services in Kodaikanal", description: "Kodaikanal sightseeing, taxi, Tempo Traveller and room booking services from SJ Sree's Tours & Travels." };

export default function ServicesPage() {
  return <main><PageIntro eyebrow="Everything for a smoother trip" title={<>One local team.<br /><em>Every detail.</em></>} text="Choose a service, tell us your dates and let us arrange the practical parts of your Kodaikanal journey." /><section className="content-section page-width"><div className="service-list">{serviceCards.map((service, index) => <Link className="service-row" href={service.href} key={service.title}><span className="service-index">0{index + 1}</span><Image src={service.image} alt={service.title} width={180} height={130} /><div><h2>{service.title}</h2><p>{service.text}</p></div></Link>)}</div></section></main>;
}
