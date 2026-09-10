import type { MetadataRoute } from "next";
import { siteUrl } from "./_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/tour-packages", priority: 0.9 },
    { path: "/kodaikanal-sightseeing", priority: 0.8 },
    { path: "/cab-taxi-booking", priority: 0.8 },
    { path: "/tempo-traveller-booking", priority: 0.8 },
    { path: "/room-hotel-booking", priority: 0.8 },
    { path: "/services", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/whatsapp-booking", priority: 0.7 },
    { path: "/gallery", priority: 0.6 },
    { path: "/about", priority: 0.5 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}