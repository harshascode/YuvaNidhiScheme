import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yuvanidhischeme.info",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://yuvanidhischeme.info/how-to-apply-yuva-nidhi-scheme-karnataka",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://yuvanidhischeme.info/disclaimer",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://yuvanidhischeme.info/terms",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://yuvanidhischeme.info/contact-us",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://yuvanidhischeme.info/privacy-policy",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://yuvanidhischeme.info/disclaimer",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
