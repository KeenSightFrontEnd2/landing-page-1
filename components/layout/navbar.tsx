"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { navLinks } from "@/lib/links"
import { settings } from "@/config/settings"
import Image from "next/image"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const handleClick = async () => {
    setNavbar(false)
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [navbar])

  return (
    <header className="select-none bg-[#010f34] ">
      <nav className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="/" onClick={handleClick}>
              <h1
                className=" duration-200 lg:hover:scale-[1.10]"
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
            <div className="flex gap-1 md:hidden">
              <button
                className="rounded-md p-2 text-primary outline-none focus:border focus:border-gray-400"
                aria-label="Hamburger Menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              {settings.themeToggleEnabled && <ModeToggle />}
            </div>
          </div>
        </div>
        <div>
          <div
            className={`absolute left-0 right-0 z-10 m-auto justify-self-center rounded-md border bg-[#010f34] p-4 md:static md:mt-0 md:block md:border-none md:p-0 ${
              navbar ? "block" : "hidden"
            }`}
            style={{ width: "100%", maxWidth: "30rem" }}
          >
            <ul className="flex flex-col items-center space-y-4 text-slate-100 md:flex-row md:space-x-6 md:space-y-0">
              {navLinks.map((link) => (
                <li key={link.route}>
                  <Link
                    className="hover:underline"
                    href={link.path}
                    onClick={handleClick}
                  >
                    {link.route}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {settings.themeToggleEnabled && (
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        )}
      </nav>
    </header>
  )
}
