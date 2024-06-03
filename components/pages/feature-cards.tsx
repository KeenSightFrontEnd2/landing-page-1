import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { featureCards } from "@/config/contents"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export default function FeatureCards() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="container space-y-8 py-12 lg:py-20">
        {featureCards.header || featureCards.subheader ? (
          <HeadingText subtext={featureCards.subheader}>
            {featureCards.header}
          </HeadingText>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featureCards.content.map((cards) => {
            return (
              <Card
                key={cards.text}
                className="flex flex-grow flex-col items-center justify-between gap-8 p-12 "
              >
                <div className="w-[30%] ">
                  <Image
                    src={cards.image}
                    alt={cards.text}
                    width={200}
                    height={200}
                    className="invert filter"
                  />
                </div>

                <div className="space-y-4">
                  <CardTitle>{cards.text}</CardTitle>
                  <CardDescription>{cards.subtext}</CardDescription>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
