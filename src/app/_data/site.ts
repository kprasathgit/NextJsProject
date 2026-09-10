export const site = {
  name: "SJ Sree's Tours & Travels",
  shortName: "Sree's Tours",
  location: "Kodaikanal, Tamil Nadu",
  phone: "8098871854",
  email: "sjsrees7@gmail.com",
  whatsapp: "6380589263",
  address: "Annanagar 1st Street, Kodaikanal, Tamil Nadu",
  instagram: "https://www.instagram.com/sj_tours_kodai?stkn=dzNiZjhwcWM3ZHRm",
  whatsappUrl: "https://wa.me/916380589263",
  openingHours: "Available 24 hours",
  googleBusinessProfile: "",
};

export const vehicleTypes = [
  { name: "Etios", seats: "4 seats", image: "/images/v1.jpeg" },
  { name: "Innova", seats: "7 seats", image: "/images/v1.jpeg" },
  { name: "Tempo Traveller", seats: "14 seats", image: "/images/v1.jpeg" },
  { name: "Mini Bus", seats: "24 seats", image: "/images/v1.jpeg" },
  { name: "Bus", seats: "40 seats", image: "/images/v1.jpeg" },
];

export const tourPackages = [
  {
    name: "Valley Tour",
    featured: true,
    subtitle: "Classic Kodaikanal sightseeing",
    places: [
      "Coaker's Walk", "Pine Forest", "Moier Point", "Guna Cave", "Pillar Rocks",
      "Golf Course", "Green Valley View", "Upper Lake", "Shopping Place", "Kodai Lake (or) City Drop",
    ],
  },
  {
    name: "Picnic Tour - 1",
    featured: true,
    subtitle: "Trekking Tour",
    places: [
      "La Saleth Church", "500 Years Old Tree", "Vattakanal Falls", "Pambar Falls", "Lion Cave",
      "Dolphin Nose", "Mountain Beauty", "Echo Point", "Kodai Lake (or) City Drop",
    ],
  },
  {
    name: "Picnic Tour - 2",
    featured: true,
    subtitle: "Wild Ways",
    places: [
      "Silent Valley View", "Fire Tower", "Berijam Lake View", "Caps Fly Valley",
      "Mathikettan Forest View", "Kodai Lake (or) City Drop",
    ],
  },
  {
    name: "Picnic Tour - 3",
    featured: true,
    subtitle: "Village Tour",
    places: [
      "Observatory Pine Forest", "Gundar Falls", "Palani View", "Mahalakshmi Temple",
      "Poombarai Village View", "Kulantahaivelapper Temple", "Mannavanur Lake View", "Kodai Lake (or) City Drop",
    ],
  },
];

export const roomTypes = [
  "Single Room", "Double Room", "Triple Room", "Family Room",
  "Deluxe Room", "Suite Room", "Cottage", "View Room",
];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const sightseeingPlaces = [
  "Coaker's Walk", "Bryant Park", "Kodaikanal Lake", "Pillar Rocks", "Guna Caves", "Moir Point", "Pine Forest", "Silver Cascade Falls", "Berijam Lake", "Dolphin's Nose",
];

export const galleryImages: [string, string][] = [
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
