import { NAV_LINKS } from "@/constants"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="max-container flexBetween 
                        padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    src="/hilink-logo.svg"
                    alt="logo"
                    width={74}
                    height={29}
                />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer 
                                   pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">

            </div>
        </nav>
    )
}

export default Nav