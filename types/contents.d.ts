import { IconKeys } from "@/components/icons"

export type HeroHeader = {
  header: string
  subheader: string
  headerArr: Array
}

export type Faq = {
  header: string
  questions: Questions[]
}
export type Questions = {
  question: string
  answer: string
}

export type Content = {
  text: string
  subtext: string
  icon?: IconKeys
  image?: string | StaticImport
}

export type ContentSection = {
  header: string
  subheader: string
  content: Array<Content>
}
