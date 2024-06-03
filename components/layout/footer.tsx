import Link from "next/link"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#010f34]">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1
              className=" mb-2  sm:mb-0"
              aria-label="Keensight Analytics Logo"
            >
              <Image
                width={200}
                height={200}
                src={"./keensight-logo.svg"}
                alt="keensight-logo"
              />
            </h1>
          </Link>

          <ul className="mb-6 flex flex-col items-start text-slate-100 sm:mb-0">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.path} className="mr-4 hover:underline md:mr-6">
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <hr className="my-6 text-muted-foreground sm:mx-auto lg:my-8" /> */}
        <span className="block text-sm text-muted-foreground sm:text-center">
          <div className="container flex justify-around">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
