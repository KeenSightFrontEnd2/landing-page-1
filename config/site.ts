import { SiteConfig, ContactConfig } from "@/types"

const baseUrl = "https://localhost:3000" //

export const siteConfig: SiteConfig = {
  name: "Quantitative Development Service",
  author: "OguzKabasakal",
  description:
    "Maximize Returns, Minimize Risk, and Gain a Competitive Edge with Our Custom Quantitative Trading Solutions",
  keywords: [
    //THIS LIST NEEDS TO BE UPDATED
    "Next.js",
    "React",
    "Tailwind CSS",
    "Landing Page",
  ],
  url: {
    base: baseUrl,
    author: "oguzkabasakal.com",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "oguzkabasakal@gmail.com",
}
