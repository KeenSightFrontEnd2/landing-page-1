import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"
import { Icons } from "../icons"

export default function HeroHeader() {
  return (
    <section className="container flex flex-col bg-hero-pattern bg-center bg-no-repeat pb-16 pt-8 text-center lg:items-center lg:gap-8 lg:bg-[length:75%] lg:py-20">
      <div className="flex flex-1 flex-col items-center justify-around gap-12  text-center lg:gap-24">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold lg:text-6xl">
            {heroHeader.header}
          </h1>
          <h2 className="text-md font-light text-muted-foreground lg:text-3xl">
            {heroHeader.subheader}
          </h2>
        </div>

        <div className="container flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-16">
          <Link
            href="https://github.com/redpangilinan/next-shadcn-landing"
            target="_blank"
            className={`${cn(buttonVariants({ size: "lg" }))} `}
          >
            Get Started Now
          </Link>

        </div>

        <ul className="container hidden justify-center gap-16  lg:flex ">
          {heroHeader.headerArr.map((el: string) => (
            <li key={el} className="flex gap-2 ">
              <Icons.check className="h-6 w-6 text-primary " />
              <span>{el}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
