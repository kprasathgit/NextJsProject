import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet SJ Sree's Tours & Travels, your local Kodaikanal travel partner.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="A local team, a better trip"
        title={
          <>
            Travel Kodaikanal
            <br />
            <em>like a local.</em>
          </>
        }
        text="SJ Sree's Tours & Travels helps families, friends and groups discover Kodaikanal with dependable transport, comfortable stays and genuinely local guidance."
        image="/images/property-exterior.jpeg"
      />
      <section className="content-section page-width split-copy">
        <div>
          <p className="eyebrow accent">Why travellers choose us</p>
          <h2>
            Less planning.
            <br />
            <em>More Kodai.</em>
          </h2>
        </div>
        <div>
          <p>
            From your first enquiry to the final drop-off, we keep travel simple. Our
            local knowledge helps you see the beautiful places, choose the right vehicle
            and find a stay that suits your group.
          </p>
          <p>
            We are based in Kodaikanal and understand the roads, weather, viewpoints and
            small details that make a hill-station trip comfortable.
          </p>
          <BookingActions label="Talk to our team" />
        </div>
      </section>
    </main>
  );
}
