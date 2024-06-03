import Hero from "@/components/pages/hero"
import FeatureCards from "@/components/pages/feature-cards"
import Features from "@/components/pages/features"
import EnjoySuccess from "@/components/pages/enjoy-success"
import Faq from "@/components/pages/faq"

export default function Home() {
  return (
    <main>
      <Hero />
      <EnjoySuccess />
      <Features />
      <FeatureCards />
      <Faq/>
    </main>
  )
}
