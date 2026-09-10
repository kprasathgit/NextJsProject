import Image from "next/image";
import Link from "next/link";
import { BookingActions } from "./_components/booking-actions";
import { serviceCards, tourPackages } from "./_data/site";

const reasons = ["Local Kodaikanal knowledge", "Comfortable vehicles and stays", "Flexible plans for families and groups"];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Image
          className="hero-image"
          src="/images/living-room.jpeg"
          alt="Comfortable living room at a Kodaikanal stay"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="page-width home-hero-copy">
          <p className="eyebrow">Your Kodaikanal journey, locally arranged</p>
          <h1>
            Come for the hills.
            <br />
            <em>Stay for the feeling.</em>
          </h1>
          <p>
            Kodaikanal tours, comfortable cabs, group travel and peaceful stays from a
            team that knows the hills personally.
          </p>
          <BookingActions label="Plan your Kodaikanal trip" />
        </div>
        <div className="hero-stamp">
          <span>Since</span>
          <strong>2014</strong>
          <span>Kodaikanal · Tamil Nadu</span>
        </div>
      </section>

      <section className="trust-strip">
        <div className="page-width trust-items">
          <span>Local travel partner</span>
          <span>Kodaikanal sightseeing</span>
          <span>Family &amp; group friendly</span>
          <span>Direct WhatsApp booking</span>
        </div>
      </section>

      <section className="content-section page-width home-intro">
        <div>
          <p className="eyebrow accent">Welcome to Sree&apos;s</p>
          <h2>
            Good trips begin
            <br />
            <em>with local people.</em>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            From a one-day sightseeing ride to a weekend stay in the misty hills, we
            take care of the details that make Kodaikanal feel easy.
          </p>
          <Link className="text-link" href="/about">
            Meet your local travel team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="service-band">
        <div className="page-width">
          <div className="section-topline">
            <div>
              <p className="eyebrow">Travel your way</p>
              <h2>
                One team for
                <br />
                <em>the whole trip.</em>
              </h2>
            </div>
            <Link className="text-link light-link" href="/services">
              See all services
            </Link>
          </div>
          <div className="service-cards">
            {serviceCards.map((service, index) => (
              <Link
                className="service-card"
                href={service.href}
                key={service.title}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 25vw"
                  loading="lazy"
                />
                <span className="card-shade" />
                <div className="service-card-content">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section package-preview-section">
        <div className="page-width">
          <div className="section-topline">
            <div>
              <p className="eyebrow accent">Choose your route</p>
              <h2>
                Four easy ways
                <br />
                <em>to see Kodai.</em>
              </h2>
            </div>
          </div>
          <div className="package-grid">
            {tourPackages.filter((item) => item.featured).map((item, index) => (
              <article className="package-card" key={item.name}>
                <span className="service-index">0{index + 1}</span>
                <p className="eyebrow accent">{item.subtitle}</p>
                <h2>{item.name}</h2>
                <ul className="package-places">
                  {item.places.map((place) => <li key={place}>{place}</li>)}
                </ul>
                <BookingActions label="Ask about this tour" />
              </article>
            ))}
          </div>
          <div className="package-all-link">
            <Link className="button button-dark" href="/tour-packages">
              View all tour packages <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section page-width reason-section">
        <div>
          <p className="eyebrow accent">The Sree&apos;s difference</p>
          <h2>
            Less searching.
            <br />
            <em>More arriving.</em>
          </h2>
          <BookingActions label="Talk to us" />
        </div>
        <div className="reason-list">
          {reasons.map((reason, index) => (
            <div key={reason}>
              <span>0{index + 1}</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div className="page-width">
          <p className="eyebrow">Ready when you are</p>
          <h2>
            Let&apos;s make your
            <br />
            <em>Kodai plan.</em>
          </h2>
          <Link className="button button-light" href="/whatsapp-booking">
            Open WhatsApp booking
          </Link>
        </div>
      </section>
    </main>
  );
}
