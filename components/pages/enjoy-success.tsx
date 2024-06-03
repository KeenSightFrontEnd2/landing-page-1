import HeadingText from "@/components/heading-text"
import { enjoySuccess } from "@/config/contents"
import Image from "next/image"
import { Card, CardDescription, CardTitle } from "../ui/card"

export default function EnjoySuccess() {
  return (
    <section className=" bg-slate-50 dark:bg-slate-900">
      <div className="container flex flex-col items-center justify-between space-y-8 py-12 lg:py-20">
        <div className="container ">
          {enjoySuccess.header || enjoySuccess.subheader ? (
            <HeadingText
              subtext={enjoySuccess.subheader}
              className="flex items-center justify-around text-center "
            >
              {enjoySuccess.header}
            </HeadingText>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* FIRST CARD */}
          <Card className="flex flex-grow flex-col items-center justify-around gap-8 p-12 md:row-span-2 ">
            <div className="h-[30%] ">
              <Image
                src={enjoySuccess.content[0].image}
                alt={enjoySuccess.content[0].text}
                width={200}
                height={200}
                className="invert filter"
              />
            </div>

            <div className="space-y-4">
              <CardTitle className="text-4xl">
                {enjoySuccess.content[0].text}
              </CardTitle>
              <CardDescription className="text-2xl">
                {enjoySuccess.content[0].subtext}
              </CardDescription>
            </div>
          </Card>

          {/* SECOND CARD */}
          <Card className="flex flex-grow flex-col items-center justify-between gap-8 p-12 md:col-span-2 ">
            <div className="w-[30%] ">
              <Image
                src={enjoySuccess.content[1].image}
                alt={enjoySuccess.content[1].text}
                width={200}
                height={200}
                className="invert filter"
              />
            </div>

            <div className="space-y-4">
              <CardTitle className="text-center text-4xl">
                {enjoySuccess.content[1].text}
              </CardTitle>
              <CardDescription className="text-xl">
                {enjoySuccess.content[1].subtext}
              </CardDescription>
            </div>
          </Card>

          {/* THIRD CARD */}
          <Card className="flex flex-grow flex-col items-center justify-between gap-8 p-12 md:col-span-1 ">
            <div className="h-[30%] ">
              <Image
                src={enjoySuccess.content[2].image}
                alt={enjoySuccess.content[2].text}
                width={200}
                height={200}
                className="invert filter"
              />
            </div>

            <div className="space-y-4">
              <CardTitle>{enjoySuccess.content[2].text}</CardTitle>
              <CardDescription>
                {enjoySuccess.content[2].subtext}
              </CardDescription>
            </div>
          </Card>

          {/* FOURTH CARD */}
          <Card className="flex flex-grow flex-col items-center justify-between gap-8 p-12 md:col-span-1 ">
            <div className="h-[30%] ">
              <Image
                src={enjoySuccess.content[3].image}
                alt={enjoySuccess.content[3].text}
                width={200}
                height={200}
                className="invert filter"
              />
            </div>

            <div className="space-y-4">
              <CardTitle>{enjoySuccess.content[3].text}</CardTitle>
              <CardDescription>
                {enjoySuccess.content[3].subtext}
              </CardDescription>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
