import { HeroHeader, ContentSection, Faq } from "@/types/contents"

export const heroHeader: HeroHeader = {
  header: `Revolutionize Your Trading with Cutting-Edge Quantitative Algorithms`,
  subheader: `Maximize Returns, Minimize Risk, and Gain a Competitive Edge with Our Custom Quantitative Trading Solutions`,
  headerArr: [
    "Right Sized Solutions",
    "AI Integrated Software",
    "Expert Communication",
  ],
}

export const enjoySuccess: ContentSection = {
  header: `We speak in Data, and the Data speaks for itself`,
  subheader: ``,
  content: [
    {
      text: `Custom Algorithm Development`,
      subtext: `Tailored quantitative strategies designed to meet your unique trading goals and risk profile.`,
      image: "/custom-algo.svg",
    },
    {
      text: `Rigorous Backtesting and Optimization`,
      subtext: `Ensure the robustness and performance of your algorithms before live trading.`,
      image: "/rigor.svg",
    },
    {
      text: `Seamless Platform Integration`,
      subtext: `Effortlessly deploy your algorithms on your preferred trading platforms.`,
      image: "/seamless.svg",
    },
    {
      text: `Real-Time Monitoring and Alerts`,
      subtext: `Stay informed about your algorithm's performance with real-time monitoring and alerts.`,
      image: "/realtime.svg",
    },
  ],
}

export const featureCards: ContentSection = {
  header: `Our Services`,
  subheader: `Our services are tailored for the digital age. From AI analytics to custom software, we're your partners in progress,dedicated to driving efficiency and fostering growth for your business.`,
  content: [
    {
      text: `Custom Algorithm Development`,
      subtext: `Tailored quantitative strategies designed to meet your unique trading goals and risk profile.`,
      image: "/custom-algo.svg",
    },
    {
      text: `Rigorous Backtesting and Optimization`,
      subtext: `Ensure the robustness and performance of your algorithms before live trading.`,
      image: "/rigor.svg",
    },
    {
      text: `Seamless Platform Integration`,
      subtext: `Effortlessly deploy your algorithms on your preferred trading platforms.`,
      image: "/seamless.svg",
    },
    {
      text: `Real-Time Monitoring and Alerts`,
      subtext: `Stay informed about your algorithm's performance with real-time monitoring and alerts.`,
      image: "/realtime.svg",
    },
    {
      text: `Ongoing Support and Maintenance`,
      subtext: `Benefit from our expert support team, ensuring optimal performance and adaptability in evolving markets.`,
      image: "/ongoing.svg",
    },
  ],
}

export const features: ContentSection = {
  header: `Statistics`,
  subheader: `Our services are designed to meet the needs of the modern trader. From AI analytics to custom software, we're your partners in progress.`,
  content: [
    {
      text: `Highly Secure`,
      subtext: `Protect your data and your customers with state-of-the-art security measures`,
      icon: "fileSearch",
      image: "/seo.png",
    },
    {
      text: `Fast Reaction Times`,
      subtext: `React quickly to market changes with our high-speed algorithms`,
      icon: "barChart",
      image: "/performant.png",
    },
    {
      text: `Easy Customizability`,
      subtext: `Tailor your tools to meet your unique needs and preferences`,
      icon: "settings",
      image: "/customizability.png",
    },
  ],
}

export const faq: Faq = {
  header: `FAQ`,
  questions: [
    {
      question: `Is it accessible?`,
      answer: `Yes. It adheres to the WAI-ARIA design pattern.`,
    },
    {
      question: `How do I get started?`,
      answer: `Simply fill out the contact form on our website, and we'll be in touch.`,
    },
    {
      question: `What are your rates?`,
      answer: `Our rates are competitive and tailored to the unique needs of each client.`,
    },
    {
      question: `Do you offer ongoing support?`,
      answer: `Yes. We provide ongoing support and maintenance to ensure optimal performance.`,
    },
  ],
}
