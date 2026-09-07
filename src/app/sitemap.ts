import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = ["", "/about", "/services", "/tour-packages", "/kodaikanal-sightseeing", "/cab-taxi-booking", "/tempo-traveller-booking", "/room-hotel-booking", "/gallery", "/contact", "/whatsapp-booking"];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.8,
  }));
}