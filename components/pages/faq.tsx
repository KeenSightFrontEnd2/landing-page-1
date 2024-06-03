import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import HeadingText from "../heading-text"
import { faq } from "@/config/contents"

export default function Faq() {
  return (
    <section className="container mb-8 py-12 lg:py-20">
      <div className="container flex flex-col items-center justify-between space-y-8  ">
        <div className="container ">
          <HeadingText
            subtext=""
            className="flex items-center justify-around text-center "
          >
            {faq.header}
          </HeadingText>
        </div>
      </div>

      <Accordion type="single" collapsible>
        {faq.questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
