import type { MetadataRoute } from "next";
import { siteUrl } from "./_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/tour-packages", "/kodaikanal-sightseeing", "/cab-taxi-booking", "/tempo-traveller-booking", "/room-hotel-booking", "/gallery", "/contact", "/whatsapp-booking"];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.8,
  }));
}