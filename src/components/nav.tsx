import { ModeToggle } from "./themetoggle";
import { Instagram } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between w-full max-w-6xl p-4 mx-auto my-0">
            <a href="/" className="font-bold text-2xl"> <span className="text-accent">&#60;p/&#62; </span>Sander Eikenes</a>
            <div className="flex">
                <ul className="flex items-center space-x-4">
                <li>
                    <a href="/" className="font-medium hover:text-accent">Home</a>
                </li>
                <li>
                    <a href="/blog" className="font-medium hover:text-accent">Blogs</a>
                </li>
                <li>
                    <ModeToggle />
                </li>
                </ul>

                <ul className="flex items-center ml-5">
                    <Link href="https://www.instagram.com/sandreikenes/">
                        <li className="flex items-center">
                            <Instagram className="h-6 w-6 hover:text-accent" />
                            <p className="mx-2">@SandrEikenes</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}