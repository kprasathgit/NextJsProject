export const site = {
  name: "SJ Sree's Tours & Travels",
  shortName: "Sree's Tours",
  location: "Kodaikanal, Tamil Nadu",
  phone: "8098871854",
  whatsapp: "6380589263",
  address: "Annanagar 1st Street, Kodaikanal, Tamil Nadu",
  instagram: "https://www.instagram.com/sj_tours_kodai?stkn=dzNiZjhwcWM3ZHRm",
  whatsappUrl: "https://wa.me/916380589263",
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const sightseeingPlaces = [
  "Coaker's Walk", "Bryant Park", "Kodaikanal Lake", "Pillar Rocks", "Guna Caves", "Moir Point", "Pine Forest", "Silver Cascade Falls", "Berijam Lake", "Dolphin's Nose",
];

export const galleryImages = [
  ["/images/room-1.jpeg", "Comfortable guest room"],
  ["/images/room-2.jpeg", "Guest bedroom"],
  ["/images/room-3.jpeg", "Spacious room"],
  ["/images/living-room.jpeg", "Living room"],
  ["/images/dining-room.jpeg", "Dining area"],
  ["/images/dining-room-2.jpeg", "Additional dining space"],
  ["/images/Hall.jpeg", "Guest hall"],
  ["/images/bathroom.jpeg", "Clean guest bathroom"],
  ["/images/terrace-view.jpeg", "Terrace view"],
  ["/images/garden-view.jpeg", "Green garden surroundings"],
  ["/images/property-exterior.jpeg", "Property exterior"],
  ["/images/foggy-view.jpeg", "Misty Kodaikanal hills"],
];

export const serviceCards = [
  { title: "Kodaikanal sightseeing", text: "Comfortable local trips planned around your time and interests.", href: "/kodaikanal-sightseeing", image: "/images/foggy-view.jpeg" },
  { title: "Cab & taxi booking", text: "Reliable cars and local drivers for transfers and full-day travel.", href: "/cab-taxi-booking", image: "/images/property-exterior.jpeg" },
  { title: "Tempo Traveller", text: "Group travel made easy with spacious vehicles and flexible routes.", href: "/tempo-traveller-booking", image: "/images/garden-view.jpeg" },
  { title: "Rooms & stays", text: "A peaceful, well-kept stay for families and groups visiting Kodai.", href: "/room-hotel-booking", image: "/images/room-1.jpeg" },
];
