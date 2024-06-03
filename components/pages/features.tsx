"use client"

import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { features } from "@/config/contents"
import { Icons } from "@/components/icons"
import { useState } from "react"

export default function Features() {
  const [hoveredOption, setHoveredOption] = useState({
    current: "/seo.png",
    prev: "",
  })

  return (
    <section className="container space-y-8 py-12 lg:py-20" id="features">
      {features.header || features.subheader ? (
        <HeadingText subtext={features.subheader} >
          {features.header}
        </HeadingText>
      ) : null}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-8">
          {features.content.map((card) => {
            const Icon = Icons[card.icon || "blank"]

            return (
              <div
                key={card.text}
                className="flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:scale-105 hover:bg-slate-100 md:flex-row md:gap-8 md:text-left"
                onMouseEnter={() =>
                  setHoveredOption({
                    current: card.image,
                    prev: hoveredOption.current,
                  })
                }
              >
                <div className="flex">
                  <Icon className="h-[6rem] w-[6rem] transition-transform duration-300 hover:scale-110" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-semibold md:text-4xl">
                    {card.text}
                  </p>
                  <p className="font-light text-muted-foreground md:text-lg">
                    {card.subtext}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <Image
          src={hoveredOption.current}
          width={800}
          height={600}
          alt={features.header}
          // className={`transition-opacity duration-500 ${hoveredOption.prev !== hoveredOption.current ? "opacity-0" : "opacity-100"}`}
        />
      </div>
    </section>
  )
}
